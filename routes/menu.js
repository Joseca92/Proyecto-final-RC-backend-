const { Router } = require("express")
const { menuGet, menuPost, menuPut, menuDelete } = require("../controllers/menu")

const router = Router()
router.get("/", menuGet)
router.post("/", menuPost)
router.put("/:id", menuPut)
router.delete("/:id", menuDelete)
module.exports = router;