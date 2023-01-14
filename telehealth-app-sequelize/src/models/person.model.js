'use strict';

const { DataTypes, Model }  = require('sequelize');
const enums                 = require('./enum-types');
const { getter, setter }    = require('./enum-utils');

class Person {
  static fields = {
    id: {
      allowNull:     false,
      autoIncrement: true,
      primaryKey:    true,
      type:          DataTypes.INTEGER,
    },
    firstName: {
      type:      DataTypes.STRING(32),
      allowNull: true,
      index:     true,
    },
    lastName: {
      type:      DataTypes.STRING(32),
      allowNull: true,
      index:     true,
    },
    active: {
      type:         DataTypes.BOOLEAN,
      allowNull:    false,
      defaultValue: true,
    },
    gender: {
      type:      DataTypes.INTEGER,
      allowNull: false,
      get:       getter(enums.GENDER_TYPE_ENUM),
      set:       setter(enums.GENDER_TYPE_ENUM),
    },
    birthDate: {
      type:      DataTypes.DATE,
      allowNull: false,
    },
    address: {
      type:      DataTypes.STRING(256),
      allowNull: false,
    },
  };
}

module.exports = (sequelize) => {
  class Patient extends Model {}
  class Practitioner extends Model {}

  Patient.init({
    ...Person.fields,
  }, {
    sequelize,
    modelName: 'Patient',
  });

  Practitioner.init({
    ...Person.fields,
  }, {
    sequelize,
    modelName: 'Practitioner',
  });
};
