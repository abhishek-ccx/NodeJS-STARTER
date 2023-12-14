const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/user", userRoutes);

module.exports = app;
