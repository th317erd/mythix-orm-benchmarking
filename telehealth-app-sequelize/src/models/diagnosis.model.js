'use strict';

const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Diagnosis extends Model {
    static fields = {
      id: {
        allowNull:     false,
        autoIncrement: true,
        primaryKey:    true,
        type:          DataTypes.INTEGER,
      },
      condition: {
        // For the benchmarking purpose, keeping the condition as simple type
        type:      DataTypes.STRING(64),
        allowNull: false,
      },
      rank: {
        type:      DataTypes.INTEGER,
        allowNull: true,
      },
    };
  }

  Diagnosis.init({
    ...Diagnosis.fields,
  }, {
    sequelize,
    modelName: 'Diagnosis',
  });
};
