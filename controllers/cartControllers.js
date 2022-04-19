const json = require('../data/jsonManager');

const cartJson = json('carts');

const cartController = {
  home: (req, res) => {
    return res.render('./cart/cart');
  },
};

module.exports = cartController;
