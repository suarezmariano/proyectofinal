const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartControllers');

//LISTADO DE PRODUCTOS
router.get('/', cartController.home);

module.exports = router;
