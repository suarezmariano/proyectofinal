const json = require('../data/jsonManager');

const cartJson = json('carts');

const cartController = {
  home: (req, res) => {
    let cart = cartJson.all();
    return res.render('./cart/cart', { cart: cart });
  },
};

module.exports = cartController;
