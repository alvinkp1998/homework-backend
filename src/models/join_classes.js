"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Join_classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Join_classes.belongsTo(models.Classes);
      models.Join_classes.hasMany(models.Join_classes);
      models.Join_classes.belongsTo(models.Users);
    }
  }
  Join_classes.init(
    {
      id: { type: DataTypes.STRING(36), primaryKey: true },
      userId: DataTypes.STRING(36),
      classId: DataTypes.STRING(36),
      role: DataTypes.ENUM("Student", "Tutor", "Facilitator"),
    },
    {
      sequelize,
      modelName: "Join_classes",
    }
  );
  return Join_classes;
};
