const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  const un = process.env.MONGO_USER;
  const pw = process.env.MONGO_PASSWORD;
  return mongoose.connect(
    `mongodb+srv://${un}:${pw}@cluster0.4nkhd.mongodb.net/cohort5?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
};
connect().then(resp => console.log(resp));
