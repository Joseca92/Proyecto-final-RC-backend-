const {Schema, model}= require('mongoose');

const PedidoSchema= Schema({
    order:{
        type: Number,
        required:[true,"El numero del pedido es obligatorio es obligatorio"],
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required:[true,"El usuario es obligatorio"], 
    },
    date:{
        type: Date,
        default: Date.now,
    },
    menu:{
        type:[String],
        required:[true,"El menu es obligatorio"],
    },
    estado:{  
        type: Boolean,
        default:true,
    },
    entrega: {
        type:Boolean,
        default: false,
      },
    nPedido:{
        type: String,
        required:[true,"El numero del pedido es obligatorio es obligatorio"],
    }
     
});
//quitar datos de la respuesta json
PedidoSchema.methods.toJSON = function() {
    const {__v, _id, ...resto}=this.toObject();
    resto.uid= _id;

    return resto;
} 

module.exports= model("Pedido", PedidoSchema);