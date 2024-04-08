const { Router } = require('express')
const { postUserHandler } = require('../handlers/userHandler')
const routerUser = Router();

routerUser.post('/', postUserHandler)

module.exports = routerUser;