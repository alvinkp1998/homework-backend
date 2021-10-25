"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Presences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Presences.belongsTo(models.Join_classes);
      models.Presences.belongsTo(models.Schedules);
    }
  }
  Presences.init(
    {
      joinClassId: { type: DataTypes.STRING(36), primaryKey: true },
      scheduleId: { type: DataTypes.STRING(36), primaryKey: true },
    },
    {
      sequelize,
      modelName: "Presences",
    }
  );
  return Presences;
};
