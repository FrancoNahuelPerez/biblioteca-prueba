const {postUser} = require('../controllers/userController')

const postUserHandler = async (require, response) =>{
    const { admin, name, password, email } = require.body
    try {
        const userCreate = await postUser({ admin, name, password, email })
        response.status(200).json(userCreate)
    } catch (error) {
        response.status(404).json({error: error.message})
    }
}


module.exports = {
    postUserHandler
}