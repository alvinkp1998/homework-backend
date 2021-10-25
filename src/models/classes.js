"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Classes.hasMany(models.Schedules);
      models.Classes.hasMany(models.Join_classes);
    }
  }
  Classes.init(
    {
      id: { type: DataTypes.INTEGER(11), primaryKey: true },
      name: DataTypes.STRING,
      code: { type: DataTypes.STRING(6), unique: true },
      description: DataTypes.STRING,
      img: DataTypes.STRING,
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Classes",
    }
  );
  return Classes;
};
