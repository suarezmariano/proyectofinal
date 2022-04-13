const json = require('../data/jsonManager');

const productsJson = json('products');

const productsController = {
  listAll: (req, res) => {
    let products = productsJson.all();
    return res.render('./products/list', { products: products });
  },

  new: (req, res) => {
    return res.render('./products/new');
  },

  save: (req, res) => {
    const product = {
      timestamp: Date.now(),
      name: req.body.name,
      description: req.body.description,
      code: req.body.code,
      image: req.body.image,
      price: req.body.price,
      stock: req.body.stock,
    };

    let productID = productsJson.create(product);
    return res.redirect('./detail/' + productID);
  },

  show: (req, res) => {
    let productDetail = productsJson.find(req.params.id);

    res.render('./products/detail', { productDetail: productDetail });
  },
};

module.exports = productsController;
