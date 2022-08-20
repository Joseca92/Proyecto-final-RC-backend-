const {Schema, model}= require('mongoose');

const MenuSchema= Schema({
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

