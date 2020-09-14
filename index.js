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

const user = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  //   password: { type: String, required: true },
  firstName: String,
  lastName: String,
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }]
});

const UserModel = mongoose.model("user", user);

connect().then(connection => {
  //create user
  async function createUser() {
    try {
      const createdUser = await UserModel.create({
        username: "del",
        firstName: "del",
        lastName: "del",
        following: ["5f5f857173892c4408401e57", "5f5f85f887dcf2441f096960"]
      });
      console.log(createdUser);
    } catch (error) {
      console.log(error);
    }
  }
  //   createUser();

  //list all users
  async function listUsers() {
    try {
      const users = await UserModel.find();
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  }
  //   listUsers();

  async function getOneUser() {
    try {
      const user = await UserModel.findById("5f5f85f887dcf2441f096960");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  //   getOneUser();

  async function updateOneUser() {
    try {
      const user = await UserModel.findByIdAndUpdate(
        "5f5f857173892c4408401e57",
        { lastName: "Sunglasses", following: ["5f5f85f887dcf2441f096960"] }
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  //   updateOneUser();

  async function deleteById() {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(
        "5f5f8c4822d73244cf6e9995"
      );
      console.log(deletedUser);
    } catch (error) {
      console.log(error);
    }
  }
  //   deleteById();

  //   async listFollowing(){
  //       try {

  //       } catch (error) {
  //           console.log(error)
  //       }
  //   }
});
