const { Router } = require("express");

const {
    categoriaGet,
    
  } = require("../controllers/categoria");


const router = Router();
router.get("/", categoriaGet);



module.exports = router;