const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "menu",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      availability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      tableName: "menu",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
};
