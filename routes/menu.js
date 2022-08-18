const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  menuGet,
  menuByIdGet,
  menuPost,
  menuPut,
  menuDelete,
} = require("../controllers/menu");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  existeCategoriaMenu,
  existeMenuPorId,
  menuExiste,
} = require("../helpers/db-validators");

const router = Router();
router.get("/",[validarJWT], menuGet);

router.get("/:id",[
  validarJWT,
  check("id","No es un id de Mongo valido").isMongoId(),
  check("nombre").custom(menuExiste),
  validarCampos, 
], menuByIdGet);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("nombre", "El nombre debe tener minimo 5 caracteres").isLength({
      min: 5,
    }),
    check("precio", "El valor debe ser numerico").isNumeric(),
    check("precio", "El valor es obligatorio").notEmpty(),
    check("detalle", "El detalle es obligatorio").notEmpty(),
    check("nombre").custom(menuExiste),
    check("categoria").custom(existeCategoriaMenu),
    
    validarCampos,
  ],
  menuPost
);
router.put(
  "/:id",
  [
    validarJWT,
    check("id", "El ID no es válido").isMongoId(),
    check("id").custom(existeMenuPorId),
    check("categoria").custom(existeCategoriaMenu),
    validarCampos,
  ],
  menuPut
);
router.delete(
  "/:id",
  [
    validarJWT,
    check("id", "El ID no es válido").isMongoId(),
    check("id").custom(existeMenuPorId),
    validarCampos,
  ],
  menuDelete
);
module.exports = router;
