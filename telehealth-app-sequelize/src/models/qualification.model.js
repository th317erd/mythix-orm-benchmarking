'use strict';

const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Qualification extends Model {}

  Qualification.init({
    id: {
      allowNull:     false,
      autoIncrement: true,
      primaryKey:    true,
      type:          DataTypes.INTEGER,
    },
    code: {
      type:      DataTypes.STRING(64),
      allowNull: false,
    },
    startDate: {
      type:      DataTypes.DATETIME,
      allowNull: false,
    },
    endDate: {
      type:      DataTypes.DATETIME,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Qualification',
  });
};
