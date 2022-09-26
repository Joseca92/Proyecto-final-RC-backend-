const { Router } =require ("express");
const { buscarMenu} = require("../controllers/menu-buscar.js");
const { validarJWT } = require("../middlewares/validar-jwt");
const { esAdminRole } = require("../middlewares/validar-role.js");

const router= Router();

router.get("/",[validarJWT], esAdminRole ,buscarMenu);
 
module.exports= router;