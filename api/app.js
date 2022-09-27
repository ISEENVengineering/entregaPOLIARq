const path = require("path");
const express = require('express');
const app = express();
const server = require('http').Server(app);
const WebSocketServer = require("websocket").server;

const ws = new WebSocketServer({
  httpServer: server,
  autoAcceptConnections: false
});

app.set("port", 3000);
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());

function originIsAllowed(origin) {
  if (origin === "http://localhost:3000") {
    return true;
  }
  return false;
}

ws.on("request", (request) => {
  if (originIsAllowed(request.origin)) {
    request.reject();
    console.log(`${new Date()}; usuario entrante: ${request.origin} rechazado.`);
    return;
  }
  const connection = request.accept(null, request.origin);
  connection.on("message", (message) => {
    console.log(`Mensaje entrante de ${request.origin}: ${message.utf8Data}`);
    connection.sendUTF(`Recibido: ${message.utf8Data}`);
  });
  connection.on("close", (reasonCode, description) => {
    console.log(`El cliente ${request.origin} se desconecto`);
  });
});

// Iniciamos el servidor en el puerto establecido por la variable port (3000)
server.listen(app.get('port'), () => {
  console.log('Servidor iniciado en el puerto: ' + app.get('port'));
})