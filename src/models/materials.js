"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Materials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Materials.belongsTo(models.Schedules);
    }
  }
  Materials.init(
    {
      id: { type: DataTypes.STRING(36), primaryKey: true },
      name: DataTypes.STRING,
      file: DataTypes.STRING,
      type: DataTypes.ENUM("Recording", "Material"),
      scheduleId: DataTypes.STRING(36),
    },
    {
      sequelize,
      modelName: "Materials",
    }
  );
  return Materials;
};
