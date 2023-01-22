const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "staff",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM('manager', 'chef', 'waiter', 'delivery'),
        allowNull: false
      }
    },
    {
      tableName: "staff",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
};
