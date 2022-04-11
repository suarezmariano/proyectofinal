const json = require('../data/jsonManager');

const productsJson = json('products');

const productsController = {
  listAll: (req, res) => {
    let products = productsJson.all();
    return res.send('./products/list', { products });
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
    console.log(product);
    let productID = productsJson.create(product);
    return res.render('./product/' + productID);
  },

  show: (req, res) => {
    let product = productsJson.find(req.params.id);

    res.send('./products/detail', { product });
  },
};

module.exports = productsController;
