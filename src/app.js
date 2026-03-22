const express = require("express");
const connectDB = require("./config/database");
const movieRouter = require("./routes/movie.routes");
const helmet = require("helmet");
const theatreRouter = require("./routes/theatre.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Hello from the movie booking backend" });
});

connectDB();

app.use("/mba/api/v1/movies", movieRouter);
app.use("/mba/api/v1/theatre", theatreRouter);

module.exports = app;
