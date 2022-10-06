
const express = require('express');
const app = express();
const morgan = require('morgan')
app.set("port", 3000);
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
  ],
  videoJuegos: [
    {
      id: '1',
      nombre: "god of war 1",
      consola: 'ps4'
    }, 
    {
      id: '2',
      nombre: "god of war 2",
      consola: 'ps4'
    },
    {
      id: '3',
      nombre: "god of war 3",
      consola: 'ps4'
    }
  ]
}

//middlewares: 
//morgan : ver por consola lo que llega delo servidor
app.use(morgan('dev')) //combined
app.use((express.urlencoded({ extended: false })))
app.use(express.json())

//endpoints
app.get('/all', (req, res) => {
  res.json(datosPrueba.usuarios)
})

app.get('/api/usuarios/datos', (req, res) => {
  let datosLLegan = {
    emailToSend: req.query.emailToSend,
    pswToSend: req.query.pswToSend,
    InputRolUser: req.query.InputRolUser
  }
  res.json(AlmacenarDatos(datosLLegan))
  console.log('datosllegam: ', datosLLegan);
})

app.get('/api/usuarios/datos/filter', (req, res) => {
  let datosAEnviar = FiltrarDatos(req.query)
  res.json(datosAEnviar)
})
AlmacenarDatos = (datos) => {
  let resp = {}
  for (let index = 0; index < datosPrueba.usuarios.length; index++) {
    if (
      datosPrueba.usuarios[index].email === datos.emailToSend &&
      datosPrueba.usuarios[index].psw === datos.pswToSend &&
      datosPrueba.usuarios[index].InputRolUser === datos.InputRolUser
    ) {
      resp = datosPrueba.usuarios[index]
      break
    }
  }
  return resp
}
FiltrarDatos = (datosQuery) => {
  
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
