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

module.exports= model("Categoria", CategoriaSchema);