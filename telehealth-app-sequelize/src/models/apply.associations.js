'use strict';

function applyAssociation(sequelize) {
  const {
    Patient,
    Practitioner,
    PatientContactPoint,
    PractitionerContactPoint,
    Qualification,
    CareTeam,
    CareTeamContactPoint,
    CareTeamParticipant,
    Encounter,
    EncounterTypeCodeableConcept,
    EncounterServiceTypeCodeableConcept,
    EncounterPriorityCodeableConcept,
    EncounterReasonCodeCodeableConcept,
    Appointment,
    Diagnosis,
    AppointmentCancelationReasonCodeableConcept,
    AppointmentServiceCategoryCodeableConcept,
    AppointmentServiceTypeCodeableConcept,
    AppointmentSpecialtyCodeableConcept,
    AppointmentAppointmentTypeCodeableConcept,
    AppointmentReasonCodeCodeableConcept,
    DiagnosisUseCodeableConcept,
  } = sequelize.models;

  Patient.hasMany(PatientContactPoint, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Practitioner.hasMany(PractitionerContactPoint, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Practitioner.hasMany(Qualification, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Patient.hasOne(CareTeam, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  CareTeam.hasMany(CareTeamContactPoint, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Practitioner.hasOne(CareTeamParticipant, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  CareTeam.hasMany(CareTeamParticipant, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  // Encounter associations
  Encounter.hasMany(EncounterTypeCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Encounter.hasOne(EncounterServiceTypeCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Encounter.hasOne(EncounterPriorityCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Encounter.hasMany(EncounterReasonCodeCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Patient.hasOne(Encounter, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Encounter.hasMany(Appointment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Encounter.hasMany(Diagnosis, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  // Appointment associations
  Appointment.hasOne(AppointmentCancelationReasonCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Appointment.hasOne(AppointmentAppointmentTypeCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Appointment.hasMany(AppointmentServiceCategoryCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Appointment.hasMany(AppointmentServiceTypeCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Appointment.hasMany(AppointmentReasonCodeCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  Appointment.hasMany(AppointmentSpecialtyCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  Diagnosis.hasOne(DiagnosisUseCodeableConcept, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
}

module.exports = { applyAssociation };