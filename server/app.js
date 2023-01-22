const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;


require('dotenv').config();

app = express();

var corsOptions = {
  origin: "http://127.0.0.1:5173",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database
const sequelize = require("./database");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });



// routers


app.listen(PORT, () => {
  console.log(
    process.env.NODE_ENV && process.env.NODE_ENV === "development"
      ? `Started: http://localhost:${PORT}`
      : "Started: "
  );
});
