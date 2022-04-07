const express = require('express');
const app = express();

const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

//SERVER
const port = 8080;
const server = app.listen(port, () => {
  console.log('servidor levantado en el puerto ' + port);
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
