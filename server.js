const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("Database connected successful!"))
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is up on ${port}!`);
});
