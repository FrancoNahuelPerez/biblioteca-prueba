const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('Tag',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type:DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false
    })
}