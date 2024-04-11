const {Router} = require('express')
const routerTag = Router()
const { getTagHandler,postTagHandler } = require('../handlers/tagHandler') 

routerTag.get('/', getTagHandler)
routerTag.post('/', postTagHandler)


module.exports = routerTag