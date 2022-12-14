const { Router }= require("express");
const { check }=require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require("../middlewares/validar-jwt");
const { existePedidoById } = require("../helpers/db-validators");


const { pedidoGet,
        pedidoByIdGet,
        pedidoPost,
        pedidoPut,
        pedidoDelete,
    } = require('../controllers/pedido');
const { esAdminRole } = require("../middlewares/validar-role");


const router= Router();

router.get('/', [
    validarJWT,
    esAdminRole,
    
], pedidoGet);

router.get("/:id",[
    validarJWT,
    check("id","No es un id de Mongo valido").isMongoId(),
    check("id").custom(existePedidoById),
    validarCampos, 
], pedidoByIdGet);

// post
router.post("/",[
    validarJWT,
], pedidoPost);

//put
router.put("/:id",[
    validarJWT,
    esAdminRole,
    check("id","No es un id de Mongo valido").isMongoId(),
    check("id").custom(existePedidoById),
    validarCampos,
    
], pedidoPut);

// Delete
router.delete("/:id",[
    validarJWT,
    esAdminRole,
    check("id","No es un id de Mongo valido").isMongoId(),
    check("id").custom(existePedidoById),
    validarCampos,
], pedidoDelete);


module.exports= router;