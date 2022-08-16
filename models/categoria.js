const {Schema, model}= require('mongoose');

const CategoriaSchema= Schema({
    categoria: {
        type:String,
        required:[true.valueOf,"El nombre es obligatorio"],        
    },
    estado:{
        type: Boolean,
        default:true,
    },
});
//quitar datos de la respuesta json
// UsuarioSchema.methods.toJSON = function() {
//     const {__v, password, _id, ...resto}=this.toObject();
//     resto.uid= _id;

//     return resto;
// }

module.exports= model("Categoria", CategoriaSchema);