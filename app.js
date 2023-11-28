const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());

const tourRoutes = require("./routes/tourRoutes");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/tours", tourRoutes);

module.exports = app;
