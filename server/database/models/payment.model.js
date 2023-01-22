const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "payment",
    {
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      payment_method: {
        type: DataTypes.ENUM('credit', 'debit', 'cash', 'online'),
        defaultValue: 'credit'
      },
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: "payment",
      createaAt: true,
      updatedAt: true,
      timestamps: true,
    }
  );
};
