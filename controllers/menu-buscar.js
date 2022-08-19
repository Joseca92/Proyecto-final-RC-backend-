const {request , response} = require("express");

//Importo objectId para luego consultar el id del mwnu.
const { ObjectId } =require ("mongoose").Types;
const Menu =require("../models/menu");

//funcion para buscar un mwnu
const buscarMenu = async(req= request, res= response)=>{
    const { search } =req.query;
    //verificar si search trae un id de mongo
    const esMongoId= ObjectId.isValid(search);
    if(esMongoId){
        const menu= await Menu.findById(search);
        return res.json({
            results :menu ? [menu] :[],
        })
    }

    //Por titulo
    const regex = new RegExp(search, "i");
    const menu = await Menu.find({
        nombre: regex,
        estado: true,
    })

    res.json({
        results: menu,
    })
}


module.exports={
    buscarMenu,
}