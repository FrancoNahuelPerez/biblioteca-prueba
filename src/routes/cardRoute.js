const { Router } = require('express')
const { postCardHandler, getCardsHandler, getCardsByIdHandler, putCardsHanlder,   } = require('../handlers/cardHandler')
const routerCard = Router();

routerCard.post('/', postCardHandler)
routerCard.get('/', getCardsHandler)
routerCard.get('/:id', getCardsByIdHandler)
routerCard.put('/:id', putCardsHanlder)

module.exports = routerCard