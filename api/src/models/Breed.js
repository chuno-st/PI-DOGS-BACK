const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('breed', {
        ID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        height: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        life_span: {
            type: DataTypes.INTEGER,
        },
    }, {
        timestamps: false
    });
};
