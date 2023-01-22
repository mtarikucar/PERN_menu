const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "company",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING
      },
      cuisine: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      }
    },
    {
      tableName: "company",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
};
