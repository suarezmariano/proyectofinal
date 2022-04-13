const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.listAll);

router.get('/new', productsController.new);
router.post('/new', productsController.save);

router.get('/detail/:id', productsController.show);

module.exports = router;
