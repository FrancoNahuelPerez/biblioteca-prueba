const { Router } = require('express')
const { postCardHandler, getCardsHandler, getCardsByIdHandler, putCardsHanlder, destroyCardHandler } = require('../handlers/cardHandler')
const routerCard = Router();

routerCard.post('/', postCardHandler)
routerCard.get('/', getCardsHandler)
routerCard.get('/:id', getCardsByIdHandler)
routerCard.put('/:id', putCardsHanlder)
routerCard.delete('/:id', destroyCardHandler)

module.exports = routerCard