const{request, resolve} = require("express");
const Pedido = require('../models/pedido');

const pedidoGet= async(req=request, res=resolve)=> {
    const {limite=30, desde=0}= req.query;
    const pedido=await Pedido.find({estado:true})
    .skip(desde)
    .limit(limite)
    .sort({"nPedido": -1})
    .populate("usuario", "nombre email");
    const total= await Pedido.countDocuments({estado:true});
    res.json({
    total,
    pedido,
  
}); 
}

const pedidoByIdGet=async(req= request, res= response)=>{
    const {id}= req.params;
    const pedido= await Pedido.findById(id);
    if (pedido.estado == false){
        return res.status(400).json({
            msg: "No se encuentra el pedido realizado"
        })
    }
    return res.json({
        pedido,
    })
  }



const pedidoPost= async(req=request, res=resolve)=> {

    const  { usuario_id, menu, nPedido} = req.body;
    const total= await Pedido.countDocuments({estado:true});

    const pedido=new Pedido({usuario: usuario_id, menu, nPedido:total+1});
    await pedido.save();

    res.status(201).json({
        msg: "Pedido en estado pendiente",
    pedido,
    
}); 
}
//Cambiar pedido de pendiente a realizado TRUE= Realizado
const pedidoPut=async(req= request, res= response)=>{
    const {id}= req.params;
    const  { entrega} = req.body;
    const pedido= await Pedido.findByIdAndUpdate(id,{entrega: true},{new:true});
    res.json({
        msg: "Pedido Realizado",
        pedido,
    });
}

const pedidoDelete= async(req, res)=> {
    const {id}= req.params;
    //pedido borrado
    const  { usuario, date, menu, estado, entrega} = req.body;
    const pedido= await Pedido.findByIdAndUpdate(id,{estado: false},{new:true});
    res.json({
    msg:'El pedido fue borrado definitivamente de la base de datos',
    pedido,
   
}); 
}


module.exports= {
    pedidoGet,
    pedidoByIdGet,
    pedidoPost,
    pedidoPut,
    pedidoDelete,
}