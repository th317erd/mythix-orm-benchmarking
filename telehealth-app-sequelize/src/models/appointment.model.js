'use strict';

const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Appointment extends Model {
    static fields = {
      id: {
        allowNull:     false,
        autoIncrement: true,
        primaryKey:    true,
        type:          DataTypes.INTEGER,
      },
      status: {
        type:      DataTypes.STRING(32),
        allowNull: false,
      },
      priority: {
        type:      DataTypes.INTEGER,
        allowNull: true,
      },
      description: {
        type:      DataTypes.STRING(128),
        allowNull: true,
      },
      start: {
        type:      DataTypes.DATETIME,
        allowNull: true,
      },
      end: {
        type:      DataTypes.DATETIME,
        allowNull: true,
      },
      created: {
        type:      DataTypes.DATETIME,
        allowNull: true,
      },
      comment: {
        type:      DataTypes.STRING(128),
        allowNull: true,
      },
    };
  }

  Appointment.init({
    ...Appointment.fields,
  }, {
    sequelize,
    modelName: 'Appointment',
  });
};
