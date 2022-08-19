const { Router } =require ("express");
const { buscarMenu} = require("../controllers/menu-buscar.js");
const { validarJWT } = require("../middlewares/validar-jwt");

const router= Router();

router.get("/",[validarJWT], buscarMenu);
 
module.exports= router;