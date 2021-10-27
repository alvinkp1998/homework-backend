"use strict";
const { Model, sequelize, Sequelize } = require("sequelize");
const { genSaltSync, hashSync } = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Join_classes }) {
      Users.hasMany(Join_classes);
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fullName: DataTypes.STRING(50),
      placeBirth: DataTypes.STRING(100),
      birthdate: DataTypes.DATEONLY,
      role: DataTypes.ENUM(["Admin", "User"]),
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("password", hashSync(value, genSaltSync(5)));
        },
      },
      address: DataTypes.STRING,
      province: DataTypes.STRING(100),
      city: DataTypes.STRING(100),
      lastStudy: DataTypes.STRING(20),
      currentJob: DataTypes.STRING(100),
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
