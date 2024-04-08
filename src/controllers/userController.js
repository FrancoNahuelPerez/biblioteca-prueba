const {User} = require('../db')
const {op} = require('sequelize')

const postUser = async ({admin, email, password, name}) =>{
    const createUser = await User.create({
        admin,
        email,
        password,
        name
    })

    return createUser
}


module.exports = {
    postUser
}