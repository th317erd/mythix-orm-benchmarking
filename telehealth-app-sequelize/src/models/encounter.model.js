'use strict';

const { DataTypes, Model }  = require('sequelize');
const enums                 = require('./enum-types');
const { getter, setter }    = require('./enum-utils');

module.exports = (sequelize) => {
  class Encounter extends Model {
    static fields = {
      id: {
        allowNull:     false,
        autoIncrement: true,
        primaryKey:    true,
        type:          DataTypes.INTEGER,
      },
      status: {
        type:      DataTypes.INTEGER,
        allowNull: false,
        get:       getter(enums.ENCOUNTER_STATUS_CODE_ENUM),
        set:       setter(enums.ENCOUNTER_STATUS_CODE_ENUM),
      },
      class: {
        type:      DataTypes.STRING(16),
        allowNull: false,
      },
      startPeriod: {
        type:      DataTypes.DATETIME,
        allowNull: true,
      },
      endPeriod: {
        type:      DataTypes.DATETIME,
        allowNull: true,
      },
      length: {
        type:      DataTypes.INTEGER,
        allowNull: true,
      },
    };
  }

  Encounter.init({
    ...Encounter.fields,
  }, {
    sequelize,
    modelName: 'Encounter',
  });
};
