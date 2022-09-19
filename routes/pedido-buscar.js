const { Router } =require ("express");
const { buscarPedido} = require("../controllers/pedido-buscar.js");
const { validarJWT } = require("../middlewares/validar-jwt");

const router= Router();

router.get("/",/* [validarJWT] */ buscarPedido);
 
module.exports= router;