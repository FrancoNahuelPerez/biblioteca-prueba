const { Tag } = require('../db')

const postTag = async ({title}) =>{
    const tag = await Tag.create({ title })

    return tag
}

const getTag = async () =>{
    const tag = await Tag.findAll()
    return tag
}

module.exports = {
    getTag,
    postTag
}