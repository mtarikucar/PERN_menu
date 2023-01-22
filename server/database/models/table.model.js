const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "table",
    {
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "table",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
};
