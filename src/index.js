require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const movieRouter = require("./routes/movie.routes");
const ENV_CONFIG = require("./config/env-config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ success: true, message: "Hello from the movie booking backend" });
});

connectDB();

app.use("/mba/api/v1/movies", movieRouter);

app.listen(ENV_CONFIG.PORT, () => {
  console.log(`Server listening on  http://localhost:${ENV_CONFIG.PORT}`);
});
