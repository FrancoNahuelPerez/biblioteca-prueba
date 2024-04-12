const { Tag } = require('../db')

const postTag = async ({ etiqueta }) =>{
    const tag = await Tag.create({ etiqueta })

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