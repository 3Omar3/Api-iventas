const mongoose = require("mongoose");

// create the connection to database
const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;

  const db = await mongoose.connect("mongodb://localhost/iventas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}

module.exports = { dbConnect };
