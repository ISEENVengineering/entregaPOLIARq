const express = require('express')
const usersControllers = require('../controladores/usuarios')

const router = express.Router()

router.get('/all', usersControllers.findAll_users)
router.get('/:id', usersControllers.findByID_user)
router.post('/add', usersControllers.addOne_User)

module.exports = router