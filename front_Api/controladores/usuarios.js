const { json } = require('body-parser')
const mongoose = require('mongoose')
const usuarios = require('../modelos/usuarios')
const Usuarios = require('../modelos/usuarios')

const findAll_users = (req, res) => {
    Usuarios.find((err, users) => {
        err && res.status(500).send(err.message)
        res.status(200).json(users)
    })
}

const findByID_user = (req, res) => {
    Usuarios.findById(req.params.id, (err, res) => {
        err && res.status(500).send(err.message)
        res.status(200).send(json.users)
    })
}

const addOne_User = (req, res) => {
    let userObject = new Usuarios({
        name: req.body.name,
        userName: req.body.userName,
        psw: req.body.psw
    })
    userObject.save((err, usr) => {
        err && res.status(500).send(err.message)
        res.status(200).send(json(usr))
    })
}


module.exports = { findAll_users, findByID_user, addOne_User }