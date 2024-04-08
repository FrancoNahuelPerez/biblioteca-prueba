const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          admin: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
          },
    },
    {timestamps:false}
    )
}