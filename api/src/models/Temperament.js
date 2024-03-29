const { DataTypes, UUIDV1 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperament', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,

    },
  }, {
    timestamps: false
  });
};
