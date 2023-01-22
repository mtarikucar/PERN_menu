const { DataTypes } = require("sequelize");

function applyRelationships(sequelize) {
  const {
    company,
    branch,
    menu,
    table,
    staff,
    order,
    role,
    user,
    payment
  } = sequelize.models;

  
  company.hasMany(branch);
  branch.hasMany(table);
  branch.belongsTo(menu);
  branch.hasMany(staff);
  table.hasMany(order);
  order.belongsTo(table);
  order.belongsToMany(menu, { through: 'orderMenu' });
  menu.belongsToMany(order, { through: 'orderMenu' });
  user.belongsTo(role);
  user.hasMany(order);
  order.belongsTo(user);
  payment.belongsTo(order);
  order.hasOne(payment);

}

module.exports = { applyRelationships };
