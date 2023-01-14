'use strict';

const { DataTypes, Model }  = require('sequelize');
const enums                 = require('./enum-types');
const { getter, setter }    = require('./enum-utils');

class ContactPoint {
  static fields = {
    id: {
      allowNull:     false,
      autoIncrement: true,
      primaryKey:    true,
      type:          DataTypes.INTEGER,
    },
    system: {
      type:      DataTypes.INTEGER,
      allowNull: false,
      get:       getter(enums.SYSTEM_TYPE_ENUM),
      set:       setter(enums.SYSTEM_TYPE_ENUM),
    },
    value: {
      type:      DataTypes.STRING(32),
      allowNull: false,
    },
    use: {
      type:      DataTypes.INTEGER,
      allowNull: false,
      get:       getter(enums.USE_TYPE_ENUM),
      set:       setter(enums.USE_TYPE_ENUM),
    },
  };
}

module.exports = (sequelize) => {
  class PatientContactCoint extends Model { }
  class PractitonerContactCoint extends Model { }
  class CareTeamContactPoint extends Model {}

  PatientContactCoint.init({
    ...ContactPoint.fields,
  }, {
    sequelize,
    modelName: 'PatientContactPoint',
  });

  PractitonerContactCoint.init({
    ...ContactPoint.fields,
  }, {
    sequelize,
    modelName: 'PractitionerContactPoint',
  });

  CareTeamContactPoint.init({
    ...ContactPoint.fields,
  }, {
    sequelize,
    modelName: 'CareTeamContactPoint',
  });
};
