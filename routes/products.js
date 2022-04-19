const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const authAdmin = require('../middlewares/admin');

//LISTADO DE PRODUCTOS
router.get('/', productsController.listAll);

//NUEVO PRODUCTO
router.get('/new', productsController.new);
router.post('/new', productsController.save);

//DETALLE DE PRODUCTO
router.get('/detail/:id', productsController.show);

//ACTUALIZAR PRODUCTO
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);

//ELIMINAR PRODUCTO
router.delete('/delete/:id', productsController.delete);

module.exports = router;
