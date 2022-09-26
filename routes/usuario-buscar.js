const { Router } =require ("express");
const { buscarUsuario} = require("../controllers/usuario-buscar");
const { validarJWT } = require("../middlewares/validar-jwt");
const { esAdminRole } = require("../middlewares/validar-role");

const router= Router();

router.get("/",[validarJWT],esAdminRole, buscarUsuario);
 
module.exports= router;