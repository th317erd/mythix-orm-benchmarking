// eslint-disable-next-line max-classes-per-file
'use strict';

const { DataTypes, Model } = require('sequelize');

class CodeableConcept {
  static fields = {
    id: {
      allowNull:     false,
      autoIncrement: true,
      primaryKey:    true,
      type:          DataTypes.INTEGER,
    },
    coding: {
      type:      DataTypes.STRING(32),
      allowNull: false,
    },
    text: {
      type:      DataTypes.STRING(32),
      allowNull: false,
    },
  };
}

module.exports = (sequelize) => {
  class EncounterTypeCodeableConcept extends Model { }
  class EncounterServiceTypeCodeableConcept extends Model { }
  class EncounterPriorityCodeableConcept extends Model { }
  class EncounterReasonCodeCodeableConcept extends Model { }

  EncounterTypeCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'EncounterTypeCodeableConcept',
  });

  EncounterServiceTypeCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'EncounterServiceTypeCodeableConcept',
  });

  EncounterPriorityCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'EncounterPriorityCodeableConcept',
  });

  EncounterReasonCodeCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'EncounterReasonCodeCodeableConcept',
  });

  class AppointmentCancelationReasonCodeableConcept extends Model {}
  class AppointmentServiceCategoryCodeableConcept extends Model { }
  class AppointmentServiceTypeCodeableConcept extends Model { }
  class AppointmentSpecialtyCodeableConcept extends Model { }
  class AppointmentAppointmentTypeCodeableConcept extends Model { }
  class AppointmentReasonCodeCodeableConcept extends Model { }

  AppointmentCancelationReasonCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'AppointmentCancelationReasonCodeableConcept',
  });

  AppointmentServiceCategoryCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'AppointmentServiceCategoryCodeableConcept',
  });

  AppointmentServiceTypeCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'AppointmentServiceTypeCodeableConcept',
  });

  AppointmentSpecialtyCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'AppointmentSpecialtyCodeableConcept',
  });

  AppointmentAppointmentTypeCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'AppointmentAppointmentTypeCodeableConcept',
  });

  AppointmentReasonCodeCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'AppointmentReasonCodeCodeableConcept',
  });

  class DiagnosisUseCodeableConcept extends Model {}

  DiagnosisUseCodeableConcept.init({
    ...CodeableConcept.fields,
  }, {
    sequelize,
    modelName: 'DiagnosisUseCodeableConcept',
  });
};
