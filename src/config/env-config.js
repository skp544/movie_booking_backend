require("dotenv").config();

const ENV_CONFIG = {
  PORT: process.env.PORT || 5000,
  DB_URL: process.env.DB_URL,
};

module.exports = ENV_CONFIG;
