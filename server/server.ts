const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');

const port = 3000; // ==> Confirgure the port

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port, () => {
  console.log(` || ==> JSON Server is running on port ${port} <== ||`);
});
