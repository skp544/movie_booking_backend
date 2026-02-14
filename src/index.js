require("dotenv").config();
const express = require("express");
const connectDB = require("../config/database");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ success: true, message: "Hello from the movie booking backend" });
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server listening on  http://localhost:${PORT}`);
});
