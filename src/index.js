const express = require("express");
const app = express();
const helmet = require("helmet"); // seguridad api rest

// Settings
app.set("port", process.env.PORT || 4000); // proceess.env.PORT puerto automatico por el server

// Middlewares
app.use(express.json()); // convierte recibidos o enviados a formatos json
app.use(helmet()); // activamos la seguridad
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Routes
app.use(require("./routes/authController"));
app.use(require("./routes/mainController"));

// Starting Server
const server = app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

// Websocket
const SocketIO = require("socket.io");
const io = SocketIO(server);

// websockets
io.on("connection", (socket) => {
  console.log("new socket connection");

  socket.on("mensaje-del-cliente", (data) => {
    socket.emit("mensaje-del-servidor", data);
  });
});
