"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Schedules, Classes, Presences, Materials }) {
      Schedules.belongsTo(Classes);
      Schedules.hasMany(Presences);
      Schedules.hasMany(Materials);
    }
  }
  Schedules.init(
    {
      id: { type: DataTypes.STRING(36), primaryKey: true },
      classId: DataTypes.INTEGER(11),
      name: DataTypes.STRING,
      code: { type: DataTypes.STRING(6), unique: true },
      start: DataTypes.DATEONLY,
      end: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Schedules",
    }
  );
  return Schedules;
};
