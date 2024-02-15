const mongoose = require("mongoose");

const url = `${process.env.MONGODB_URI}/${process.env.DB_NAME}`;

const connectDb = () => {
  mongoose
    .connect(url)
    .then(() => console.log("Connected to DB!"))
    .catch((err) => console.error("Error connecting to DB!", err));
};

module.exports = { connectDb };
