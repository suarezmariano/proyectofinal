const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.listAll);

router.get('/new', productsController.new);

module.exports = router;
