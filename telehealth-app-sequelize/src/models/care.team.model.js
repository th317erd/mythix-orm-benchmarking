'use strict';

const { DataTypes, Model }  = require('sequelize');
const enums                 = require('./enum-types');
const { getter, setter }    = require('./enum-utils');

module.exports = (sequelize) => {
  class CareTeam extends Model {
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
        get:       getter(enums.CARETEAM_STATUS_CODE_ENUM),
        set:       setter(enums.CARETEAM_STATUS_CODE_ENUM),
      },
      category: {
        type:      DataTypes.STRING(64),
        allowNull: false,
      },
      name: {
        type:      DataTypes.STRING(64),
        allowNull: false,
      },
      periodStart: {
        type: DataTypes.DATETIME,
      },
      periodEnd: {
        type: DataTypes.DATETIME,
      },
      note: {
        type: DataTypes.STRING(128),
      },
    };
  }

  CareTeam.init({
    ...CareTeam.fields,
  }, {
    sequelize,
    modelName: 'CareTeam',
  });
};
