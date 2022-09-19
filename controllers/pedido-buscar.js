const {request , response} = require("express");

//Importo objectId para luego consultar el id del mwnu.
const { ObjectId } =require ("mongoose").Types;
const Pedido =require("../models/pedido");

//funcion para buscar un mwnu
const buscarPedido = async(req= request, res= response)=>{
    const { search, searchP=true } =req.query;
    //verificar si search trae un id de mongo
    const esMongoId= ObjectId.isValid(search);
    if(esMongoId){
        const pedido= await Pedido.findById(search);
        return res.json({
            results :pedido ? [pedido] :[],
        })
    }
    
// por titulo
    
    const pedido = await Pedido.find({
        nPedido: search,
        estado: true,
    }).populate("usuario", "nombre email");
     
 
    /* buscar pedidos Pendientes*/
     const pedidoE = await Pedido.find({
        entrega: false,
        estado: true,
    }).populate("usuario", "nombre email");

    const pedidoR = await Pedido.find({
        entrega: true,
        estado: true,
    }).populate("usuario", "nombre email");


    res.json({
        results: pedido, 
        other: pedidoE,
        otherReady: pedidoR,
     
    })
} 


module.exports={
    buscarPedido,
}