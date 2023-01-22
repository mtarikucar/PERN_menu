const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "branch",
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
      },
      open_hours: {
        type: DataTypes.STRING,
      },
      close_hours: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "branch",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
};
