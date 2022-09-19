const { Router } =require ("express");
const { buscarUsuario} = require("../controllers/usuario-buscar");
const { validarJWT } = require("../middlewares/validar-jwt");

const router= Router();

router.get("/",/* [validarJWT] */ buscarUsuario);
 
module.exports= router;