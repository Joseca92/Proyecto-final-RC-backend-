const{request, resolve} = require("express");
const Pedido = require('../models/pedido');

const pedidoGet= async(req=request, res=resolve)=> {
    const {limite=5, desde=0}= req.query;
    const pedido=await Usuario.find({estado:true})
    .skip(desde)
    .limit(limite)
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

    const  { usuario_id, date, menu_id, estado} = req.body;
    const pedido=new Pedido({usuario: usuario_id, menu: menu_id, date: date,estado: estado});
    await pedido.save();

    res.status(201).json({
    pedido,
    
}); 
}
//Cambiar pedido de pendiente a realizado TRUE= Realizado
const pedidoPut=async(req= request, res= response)=>{
    const {id}= req.params;
    const  { usuario, date, menu, estado, entrega} = req.body;
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
    const pedido= await Pedido.findByIdAndUpdate(id,{estado: true},{new:true});
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