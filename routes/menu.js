const { Router } = require("express");
const {
  menuGet,
  menuPost,
  menuPut,
  menuDelete,
} = require("../controllers/menu");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { existeCategoriaMenu, existeMenuPorId } = require("../helpers/db-validators");

const router = Router();
router.get("/", menuGet);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("nombre", "El nombre debe tener minimo 5 caracteres").isLength({
      min: 5,
    }),
    check("precio", "El valor debe ser numerico").isNumeric(),
    check("detalle", "El detalle es obligatorio").notEmpty(),
    check("categoria").custom(existeCategoriaMenu),
    validarCampos,
  ],
  menuPost
);
router.put("/:id", [
    check("id","El ID no es válido").isMongoId(),
    check("id").custom(existeMenuPorId),
    validarCampos
],menuPut);
router.delete("/:id",[
    check("id","El ID no es válido").isMongoId(),
    check("id").custom(existeMenuPorId),
    validarCampos
], menuDelete);
module.exports = router;
