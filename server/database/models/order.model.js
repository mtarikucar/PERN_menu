const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "order",
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "processing", "delivered"),
        defaultValue: "pending",
      },
      total_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      tableName: "order",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
};
