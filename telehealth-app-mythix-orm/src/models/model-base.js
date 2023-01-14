'use strict';

const Nife = require('nife');
const {
  Model,
  Types,
  Utils: MythixORMUtils,
} = require('mythix-orm');
const Utils = require('../../../utils');

// This is the base model class that all other
// models inherit from. It provides common
// functionality between all models.

class ModelBase extends Model {
  static fields = {
    createdAt: {
      type:         Types.DATETIME,
      defaultValue: Types.DATETIME.Default.NOW,
      allowNull:    false,
      index:        true,
    },
    updatedAt: {
      type:         Types.DATETIME,
      defaultValue: Types.DATETIME.Default.NOW.UPDATE,
      allowNull:    false,
      index:        true,
    },
  };

  static defaultScope(query) {
    return query.ORDER.ASC(`+${this.getModelName()}:createdAt`);
  }

  static isValidID(id, modelName) {
    return Utils.isValidID(id, modelName);
  }

  isValidID(id, modelName) {
    return this.constructor.isValidID(id, modelName);
  }

  static getModelIDPrefix() {
    return Utils.getModelIDPrefixFor(this.getModelName());
  }

  getModelIDPrefix() {
    return this.constructor.getModelIDPrefix();
  }

  static getModelTypeAndIDFromID(id) {
    return Utils.getModelTypeAndIDFromID(id);
  }

  getModelTypeAndIDFromID(id) {
    return this.constructor.getModelTypeAndIDFromID(id);
  }

  static getModelNameFromID(id) {
    return Utils.getModelNameFromIDPrefix(id);
  }

  getModelNameFromID(id) {
    return this.constructor.getModelNameFromID(id);
  }

  static stripIDPrefix(id) {
    return Utils.stripIDPrefix(id);
  }

  stripIDPrefix(id) {
    return this.constructor.stripIDPrefix(id);
  }

  static addIDPrefix(id) {
    return Utils.addIDPrefix(id);
  }

  addIDPrefix(id) {
    return this.constructor.addIDPrefix(id);
  }

  static getModelTypeAndID(_modelOrID) {
    if (!_modelOrID)
      return;

    let modelOrID = _modelOrID;
    if (modelOrID instanceof ModelBase) {
      return {
        type: modelOrID.getModelName(),
        id:   modelOrID.id,
      };
    } else if (modelOrID.type && modelOrID.id) {
      return modelOrID;
    } else if (this.isValidID(modelOrID)) {
      return this.getModelTypeAndIDFromID(modelOrID);
    }
  }

  getModelTypeAndID(_modelOrID) {
    return this.constructor.getModelTypeAndID(_modelOrID);
  }

  // MythixORM "getModel" only returns the current
  // model... so here we overload to be able to
  // fetch a model by name.
  getModel(modelName) {
    if (!modelName)
      return super.getModel();

    let connection = this.getConnection();
    return connection.getModel(modelName);
  }

  getModels() {
    let connection = this.getConnection();
    return connection.getModels();
  }

  throwNotFoundError(message, code) {
    throw new Utils.NotFoundError(message || 'Not Found', code);
  }

  throwForbiddenError(message, code) {
    throw new Utils.ForbiddenError(message || 'Forbidden', code);
  }

  // This will take a "query object"
  // and convert it into a Mythix ORM query
  static generateQueryFromFilter(Model, filter) {
    if (Nife.isEmpty(filter))
      return;

    return MythixORMUtils.generateQueryFromFilter(this.getConnection(), Model, filter);
  }

  generateQueryFromFilter(Model, filter) {
    return this.constructor.generateQueryFromFilter(Model, filter);
  }

  static collectEmails(emails) {
    return Nife.toArray(emails).filter((email) => {
      if (!email)
        return false;

      if (!Nife.instanceOf(email, 'string'))
        return false;

      if (email.indexOf('@') < 0)
        return false;

      return true;
    }).map((email) => email.toLowerCase());
  }

  collectEmails(emails) {
    return this.constructor.collectEmails(emails);
  }
}

module.exports = {
  ModelBase,
};
