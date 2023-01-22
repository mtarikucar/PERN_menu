const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "role",
    {
      name: {
        type: DataTypes.ENUM('admin', 'customer', 'staff'),
        allowNull: false
      }
    },
    {
      tableName: "role",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
};
