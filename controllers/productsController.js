const json = require('../data/jsonManager');

const productsJson = json('products');

const productsController = {
  listAll: (req, res) => {
    let products = productsJson.all();
    return res.render('./products/list', { products });
  },

  new: (req, res) => {
    return res.render('./products/new');
  },
};

module.exports = productsController;
