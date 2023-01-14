'use strict';

const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class CareTeamParticipant extends Model {
    static fields = {
      id: {
        allowNull:     false,
        autoIncrement: true,
        primaryKey:    true,
        type:          DataTypes.INTEGER,
      },
      role: {
        type:      DataTypes.STRING(64),
        allowNull: false,
      },
      periodStart: {
        type: DataTypes.DATETIME,
      },
      periodEnd: {
        type: DataTypes.DATETIME,
      },
    };
  }

  CareTeamParticipant.init({
    ...CareTeamParticipant.fields,
  }, {
    sequelize,
    modelName: 'CareTeamParticipant',
  });
};
