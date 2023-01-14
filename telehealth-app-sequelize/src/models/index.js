'use strict';

const { Sequelize }         = require('sequelize');
const { applyAssociation }  = require('./apply.associations');

const sequelize = new Sequelize({
  dialect:            'sqlite::memory:',
  logQueryParameters: true,
  benchmark:          true,
});

const modelDefiners = [
  require('./person.model'),
  require('./contact.point.model'),
  require('./qualification.model'),
  require('./codeable.concept.model'),
  require('./care.team.model'),
  require('./care.team.participant.model'),
  require('./appointment.model'),
  require('./diagnosis.model'),
  require('./encounter.model'),
];

for (const modelDefiner of modelDefiners)
  modelDefiner(sequelize);

applyAssociation(sequelize);

module.exports = sequelize;