const {request , response} = require("express");

//Importo objectId para luego consultar el id del mwnu.
const { ObjectId } =require ("mongoose").Types;
const Usuario =require("../models/usuario");

//funcion para buscar un mwnu
const buscarUsuario = async(req= request, res= response)=>{
    const { search, searchP=true } =req.query;
    //verificar si search trae un id de mongo
    const esMongoId= ObjectId.isValid(search);
    if(esMongoId){
        const usuario= await Usuario.findById(search);
        return res.json({
            results :usuario ? [usuario] :[],
        })
    }
    
// por nombre
    
const regex = new RegExp(search, "i");
const usuario = await Usuario.find({
    nombre: regex,
    estado: true,
})

res.json({
    results: usuario,
})
} 


module.exports={
    buscarUsuario,
}