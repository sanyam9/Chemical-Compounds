/* eslint-disable linebreak-style */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compound extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Compound.init({
    compoundName: DataTypes.STRING,
    compoundImage: DataTypes.STRING,
    compoundDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Compound',
  });
  return Compound;
};