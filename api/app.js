
const express = require('express');
const app = express();
app.set("port", 3000);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send('api web');
});

datosPrueba = {
  usuarios: [
    {
      email: 'alma@no.com',
      psw: "09876",
      InputRolUser: '1'
    }, {
      email: 'kdkwd@dkwmdk.com',
      psw: "bkbjkgu",
      InputRolUser: '1'
    }, {
      email: 'alma2@no.com',
      psw: "qwerty",
      InputRolUser: '1'
    },
  ]
}


app.get('/api/usuarios/datos', (req, res) => {
  let datosLLegan = {
    emailToSend: req.query.emailToSend,
    pswToSend: req.query.pswToSend,
    InputRolUser: req.query.InputRolUser
  }
  res.send(AlmacenarDatos(datosLLegan))
  console.log('datosllegam: ', datosLLegan);
})

function AlmacenarDatos(datos) {
  let resp = 404
  for (let index = 0; index < datosPrueba.usuarios.length; index++) {
    if (
      datosPrueba.usuarios[index].email === datos.emailToSend &&
      datosPrueba.usuarios[index].psw === datos.pswToSend &&
      datosPrueba.usuarios[index].InputRolUser === datos.InputRolUser
    ) {
      resp = 200
      break
    }
  }
  return resp
}

app.listen(app.get('port'), () => {
  console.log('Servidor iniciado en el puerto: ' + app.get('port'));
})
// const server = require('http').Server(app);
// const WebSocketServer = require("websocket").server;
//const path = require("path");
// const ws = new WebSocketServer({
//   httpServer: server,
//   autoAcceptConnections: false
// });

// app.use(express.static(path.join(__dirname, "./public")));
// app.use(express.json());

// function originIsAllowed(origin) {
//   if (origin === "http://localhost:3000") {
//     return true;
//   }
//   return false;
// }

// ws.on("request", (request) => {
//   if (originIsAllowed(request.origin)) {
//     request.reject();
//     console.log(`${new Date()}; usuario entrante: ${request.origin} rechazado.`);
//     return;
//   }
//   const connection = request.accept(null, request.origin);
//   connection.on("message", (message) => {
//     console.log(`Mensaje entrante de ${request.origin}: ${message.utf8Data}`);
//     connection.sendUTF(`Recibido: ${message.utf8Data}`);
//   });
//   connection.on("close", (reasonCode, description) => {
//     console.log(`El cliente ${request.origin} se desconecto`);
//   });
// });






// Iniciamos el servidor en el puerto establecido por la variable port (3000)
