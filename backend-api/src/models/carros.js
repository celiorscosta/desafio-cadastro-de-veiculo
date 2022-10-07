'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carros.init({
    placa: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    modelo: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    marca: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Carros',
  });
  return Carros;
};