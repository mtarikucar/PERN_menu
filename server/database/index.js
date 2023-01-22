const { Sequelize } = require("sequelize");
const { applyRelationships } = require("./relationships");

// Connection
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.dialect,
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);



const modelDefiners = [
  require("./models/branch.model"),
  require("./models/cart.model"),
  require("./models/company.model"),
  require("./models/country.model"),
  require("./models/location.model"),
  require("./models/menu.model"),
  require("./models/order.model"),
  require("./models/payment.model"),
  require("./models/role.model"),
  require("./models/staff.model"),
  require("./models/table.model"),
  require("./models/user.model"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyRelationships(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
