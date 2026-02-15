const mongoose = require("mongoose");
const ENV_CONFIG = require("./env-config");

const connectDB = async () => {
  try {
    await mongoose.connect(ENV_CONFIG.DB_URL);
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
