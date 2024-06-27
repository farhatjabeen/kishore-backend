const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");

const db = {};
const sequelize = new Sequelize("student_details", "adminuser", "Doodle@123", {
  host: "farhatsql.mysql.database.azure.com",
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      ca: fs.readFileSync(path.resolve(__dirname, "DigiCertGlobalRootCA.crt.pem")),
    },
  },
  pool: {
    max: 90,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;