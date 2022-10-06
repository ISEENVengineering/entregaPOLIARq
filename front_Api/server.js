const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const UsersAPI = require('./API_/usuarios')

const app = express()
app.set('port', 1200 || process.env.PORT)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/collections', UsersAPI)

mongoose.connect(
    "mongodb://localhost/usuarios",
    { useNewUrlParser: true },
    (err, res) => {
        err && console.log(`conexión erronea: ${err}`);
        app.listen(1200, () => {
            console.log(`servidor corriendo en puerto ${app.get('port')}`);
        })
    }
)