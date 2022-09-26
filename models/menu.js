const {Schema, model}= require('mongoose');

const MenuSchema= Schema({
    img:{
        type:String,
        default:"https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    },
    nombre: {
        type:String,
        required:[true,"El nombre es obligatorio"],        
    },
    estado:{
        type: Boolean,
        default:true,
    },
    precio:{ 
        type:Number,
        required:[true,"El precio es obligatorio"], 
    },
    detalle:{  
        type:String,
        required:[true,"El detalle es obligatorio"], 
    },
    categoria:{
        type: String,
        required:[true,"La categoria es obligatoria"], 
    },
});
// quitar datos de la respuesta json
 MenuSchema.methods.toJSON = function() {
     const {__v, ...resto}=this.toObject();

     return resto;
 }


module.exports= model("Menu", MenuSchema);

