const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

//SERVER
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log('Server running en port: ' + PORT);
});

server.on('error', (error) => console.log(`hubo un error ${error}`));

//ROUTES
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);

app.use((req, res, next) => {
  res.status(404).render('not-found');
});
