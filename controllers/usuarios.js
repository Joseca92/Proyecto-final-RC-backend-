const{request, resolve} = require("express");
const Usuario = require('../models/usuario');
const bcrypt = require("bcryptjs");

//traer un susuario por su id
const usuariosGetId= async(req=request, res=resolve)=> {
    const {id}= req.params;
    const usuario= await Usuario.findById(id);
    if (usuario.hidden == true){
        return res.status(400).json({
            msg: "No se encuentro al usuario"
        })
    }
    res.json({
    usuario,
  
}); 
}


   


//trae a todos los usuarios
const usuariosGet= async(req=request, res=resolve)=> {
    
    const usuario=await Usuario.find({estado:true})
    
    const total= await Usuario.countDocuments({estado:true});
    res.json({
    total,
    usuario,
  
}); 
}

   

const usuariosPost= async(req=request, res=resolve)=> {

    const  {nombre, email, password,role} = req.body;
   const usuario=new Usuario({nombre, email, password,role});

    //encriptar la contraseña
    const salt=bcrypt.genSaltSync();
    usuario.password= bcrypt.hashSync(password, salt);
    await usuario.save(); 

    res.status(201).json({
    usuario,
    
}); 
}
const usuariosPut= async(req, res)=> {
    const {id}= req.params;
    const {_id,password,email, ...datos}= req.body;
    //validar contra la base de datos
    if(password){
        //encriptar contraseña
        const salt=bcrypt.genSaltSync();
        datos.password= bcrypt.hashSync(password, salt);   
    }

    const usuario= await Usuario.findByIdAndUpdate(id,datos,{new:true});
    res.json({
    msg:'Usuario Actualizado',
    usuario,
}); 
}
const usuariosDelete= async(req, res)=> {
    const {id}= req.params;
    //inactivar al usuario
    const query={estado:false};
    const usuarioBorrado= await Usuario.findByIdAndUpdate(id, query,{new:true});
    res.json({
    msg:'Usuario borrado de la base de datos',
    usuarioBorrado,
   // usuarioAutenticado,
}); 
}


module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosGetId,
   
}