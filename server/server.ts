const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

const port = 3000; // ==> Confirgure the port

server.use(middlewares);
server.use(jsonServer.bodyParser);

// || ==> Add the routes <== || //
const readClient = () => {
  const dbRaw = fs.readFileSync('./server/db.json');
  const clients = JSON.parse(dbRaw).clientes;
  return clients;
};

server.post('/clientes', (req: any, res: any) => {
  const clients = readClient();

  const request = req.body;

  const client = (clients || []).filter((c: any) => c?.id === request?.id)[0];
  if (client === undefined || client === null) {
    res.send({
      code: 0,
      msg: 'Cliente agregado con éxito',
    });
    db.clientes.push(req.body);
  } else {
    res.status(500).send({ msg: 'Cliente ya existe' });
  }
});

const readProduct = () => {
  const dbRaw = fs.readFileSync('./server/db.json');
  const products = JSON.parse(dbRaw).productos;
  return products;
};

server.post('/productos', (req: any, res: any) => {
  const products = readProduct();

  const request = req.body;

  const product = (products || []).filter((c: any) => c?.id === request?.id)[0];
  if (product === undefined || product === null) {
    res.send({
      code: 0,
      msg: 'Producto agregado con éxito',
    });
    db.productos.push(req.body);
  } else {
    res.status(500).send({ msg: 'Producto ya existe' });
  }
});

server.use(router);
server.listen(port, () => {
  console.log(` || ==> JSON Server is running on port ${port} <== ||`);
});
