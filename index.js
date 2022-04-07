const express = require('express');
const app = express();

const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SERVER
const port = 8080;
const server = app.listen(port, () => {
  console.log('servidor levantado en el puerto ' + port);
});

server.on('error', (error) => console.log(`hubo un error ${error}`));
