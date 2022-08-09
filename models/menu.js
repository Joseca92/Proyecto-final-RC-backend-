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
        type: Schema.Types.ObjectId,
        ref: "categoria",
        required:[true,"La categoria es obligatoria"], 
    },
});
// quitar datos de la respuesta json
// MenuSchema.methods.toJSON = function() {
//     const {__v, password, _id, ...resto}=this.toObject();
//     resto.uid= _id;

//     return resto;
// }


module.exports= model("Menu", MenuSchema);

