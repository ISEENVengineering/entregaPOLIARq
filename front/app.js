const express = require('express')
const app = express()

const path = require('path')

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    path: "ws://localhost:3000"
});

const Usuario = require('./models/Class_usuario')
const idRandom = require('./models/idRandom')

var bodyParser = require("body-parser");

const PORt = 5000 || process.env.PORT

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'))
})


//middlewares
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));



// form submission
app.post("/", function (req, res) {
    try {
        let datosUSU = {
            InputName: req.body.InputName,
            InputLastN: req.body.InputLastN,
            emailToSend: req.body.emailToSend,
            pswToSend: req.body.pswToSend,
            InputYOld: req.body.InputYOld,
            InputRolUser: req.body.InputRolUser
        }

        const USER = new Usuario(
            idRandom(datosUSU.InputName, 32),
            datosUSU.InputName,
            datosUSU.InputLastN,
            datosUSU.emailToSend,
            datosUSU.pswToSend,
            datosUSU.InputYOld,
            0,
            'juegos',
            datosUSU.InputRolUser
        )
        io.on("connection", (socket) => {
            socket.on("messages", (arg) => {
                console.log(arg); // world
            });
            socket.emit("hello", "world");
        });
        res.send('bien')


    } catch (error) {
        res.send('500 Internal Server Error, parse data is error proccess: ', error)
    }

});

app.use(express.static(path.join(__dirname + '/public')))

app.listen(PORt, () => console.log(`server on port ${PORt}`))