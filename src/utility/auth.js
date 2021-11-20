const database = require("../database");
const User = require("../models/User");

database.dbConnect();

async function login(data) {
  try {
    const user = await User.findOne({ email: data.email });
    if (!user) throw new Error("Correo o contraseña incorrectos");

    const match = await user.matchPassword(data.password);
    if (match) return user;

    throw new Error("Correo o contraseña incorrectos");
  } catch (e) {
    throw e;
  }
}

async function insertUser(data) {
  try {
    const user = new User(data);
    user.password = await user.encryptPassword(data.password);
    await user.save();
    return user;
  } catch (e) {
    throw e;
  }
}

async function getUsers() {
  try {
    const user = await User.find({});
    return user;
  } catch (e) {
    throw e;
  }
}

async function getUserByEmail(email) {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (e) {
    throw e;
  }
}

module.exports = { login, insertUser, getUsers, getUserByEmail };
