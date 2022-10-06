const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String },
    userName: { type: String },
    psw: { type: String }
})

module.exports = Usuarios = mongoose.model('Usuarios', UserSchema)