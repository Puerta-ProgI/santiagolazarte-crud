const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main-controller")

router.get ("/", mainController.home)
router.get ("/productos", mainController.listadoDeProductos)
router.get ("/productos/:id", mainController.detalleDeProducto)

module.exports = router
