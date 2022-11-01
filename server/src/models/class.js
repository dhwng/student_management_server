"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Class extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Class.hasMany(models.student, {
                foreignKey: "ClassId",
            });
            Class.belongsTo(models.grade, {
                foreignKey: "GradeId",
                constraints: false,
            });
        }
    }
    Class.init(
        {
            gradeId: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Class",
        }
    );
    return Class;
};
