"use strict";
const { Model } = require("sequelize");
const join_classes = require("./join_classes");
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Schedules, Classes, Join_classes, Materials }) {
      Schedules.belongsTo(Classes);
      Schedules.belongsToMany(Join_classes, { through: "Presences" });
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
