const { getTag, postTag } = require('../controllers/tagController')

const getTagHandler = async (require,response) =>{
    try {
        const tag = await getTag()
        response.status(200).json(tag)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
}

const postTagHandler = async (require,response) =>{
    const { title } = require.body
    try {
        const tag = await postTag({ title })
        response.status(200).json(tag)
    } catch (error) {
        response.status(400).json({error: error.message})
    }
}

module.exports = {
    getTagHandler,
    postTagHandler
}