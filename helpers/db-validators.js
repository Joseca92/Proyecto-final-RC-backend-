const Role =require("../models/role");
const Usuario= require("../models/usuario");
const Categoria = require("../models/categoria");
const Menu = require("../models/menu")
const esRoleValido= async(role="")=>{
    const existeRole= await Role.findOne({role});
    if(!existeRole){
        throw new Error(`El rol ${role} no existe en la BD`);

    } 

}
const emailExiste=async(email)=>{
    const existeEmail = await Usuario.findOne({email});
    if(existeEmail){
        throw new Error(`El correo ${email} ya existe en la BD`);
    }
}
//Validar si ID existe
const existeUsuarioPorId= async(id)=>{
    const existeUsuario= await Usuario.findOne({_id:id});
    if(!existeUsuario){
        throw new Error(`El ID ${id} no existe en la BD`);
    }
}
//Validar categoria Menu
const existeCategoriaMenu = async (categoria = "") => {
    const existeCtegoria = await Categoria.findOne({categoria});
    if (!existeCtegoria) {
      throw new Error(`La categoria ${categoria} no existe en la DB`);
    }
  }
const existeMenuPorId= async(id)=>{
    const existeMenu= await Menu.findOne({_id:id});
    if(!existeMenu){
        throw new Error(`El ID ${id} no existe en la BD`);
    }
}

module.exports={
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaMenu,
    existeMenuPorId,
 
}