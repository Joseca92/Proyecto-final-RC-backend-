const { Router } =require ("express");
const { buscarPedido} = require("../controllers/pedido-buscar.js");
const { validarJWT } = require("../middlewares/validar-jwt");
const { esAdminRole } = require("../middlewares/validar-role.js");

const router= Router();

router.get("/",[validarJWT],esAdminRole, buscarPedido);
 
module.exports= router;