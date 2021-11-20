const mongoose = require("mongoose");

// create the connection to database
const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;

  const db = await mongoose.connect(
    "mongodb+srv://user_1:7l18gvvFk6aIgXgM@cluster0.l8zli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}

module.exports = { dbConnect };
