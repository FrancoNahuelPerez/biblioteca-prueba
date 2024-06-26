
const { postCard, getCards, getCardsById, putCards, getCardsByName, destroyCard } = require('../controllers/cardController')


const postCardHandler = async (require, response) =>{
    const { title, description, link, etiqueta  } = require.body
    try {
        const card = await postCard({ title, description, link, etiqueta ,  }) 
        response.status(200).json(card)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
}

const getCardsHandler = async(require,response) =>{
    const {title} = require.query
    try {
        const card = title ? await getCardsByName({title}) : await getCards()
        response.status(200).json(card)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
}

const getCardsByIdHandler = async (require,response) =>{
    const {id} = require.params
    try {
        const card = await getCardsById({id})
        response.status(200).json(card)
    } catch (error) {
        response.status(400).json({error: error.message})
    } 
}

const putCardsHanlder = async (require, response) =>{
    const {title, description, link, task} = require.body
    const {id} = require.params
    try {
        const card = await putCards({title,task,id, description, link})
        response.status(200).json(card)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
}

const destroyCardHandler = async(require, response) => {
    const {id} = require.params;
    try {
        const card = await destroyCard({id})
        response.status(200).json(card)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
}

// const getCardsByNameHandler = async (require,response) =>{
//     const {title} = require.query
//     try {
//         const card = await getCardsByName({title})
//         response.status(200).json(card)
//     } catch (error) {
//         response.status(400).json({error: error.message})
//     }
// }

module.exports = {
    postCardHandler,
    getCardsHandler,
    getCardsByIdHandler,
    putCardsHanlder,
   destroyCardHandler
}