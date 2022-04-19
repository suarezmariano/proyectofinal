const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const authAdmin = require('../middlewares/admin');

//LISTADO DE PRODUCTOS
router.get('/', productsController.listAll);

//NUEVO PRODUCTO
router.get('/new', authAdmin, productsController.new);
router.post('/new', authAdmin, productsController.save);

//DETALLE DE PRODUCTO
router.get('/detail/:id', productsController.show);

//ACTUALIZAR PRODUCTO
router.get('/edit/:id', authAdmin, productsController.edit);
router.put('/edit/:id', authAdmin, productsController.update);

//ELIMINAR PRODUCTO
router.delete('/delete/:id', authAdmin, productsController.delete);

module.exports = router;
