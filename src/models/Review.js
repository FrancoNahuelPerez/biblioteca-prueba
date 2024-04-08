const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('Review',{
        title:{
            type:DataTypes.STRING,
            allowNull: false
        },
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        }
    },
    {timestamps:false})
}