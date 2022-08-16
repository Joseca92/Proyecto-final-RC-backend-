const {Schema, model}= require('mongoose');

const PedidoSchema= Schema({
    usuario:{
        type: Schema.Types.ObjectId,
        ref: "usuario",
        required:[true,"El usuario es obligatorio"], 
    },
    date: {
        type: Date,
        default: Date.now,
      },
    menu:{
        type: Schema.Types.ObjectId,
        ref: "menu",
        required:[true,"El menú es obligatorio"], 
    },
    estado:{
        type: Boolean,
        default:true,
    },
    entrega: {
        type:Boolean,
        default: false,
      },
     
});
//quitar datos de la respuesta json
/* UsuarioSchema.methods.toJSON = function() {
    const {__v, password, _id, ...resto}=this.toObject();
    resto.uid= _id;

    return resto;
} */

module.exports= model("Pedido", PedidoSchema);