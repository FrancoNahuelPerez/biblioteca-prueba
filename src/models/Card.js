const {DataTypes,} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('Card',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        link:{
            type:DataTypes.STRING,
            allowNull: false

        },
    },
    {
        timestamps: false,
    })
}