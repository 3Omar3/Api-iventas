const express = require("express");
const router = express.Router();

const { auth } = require("../utility/index");

// login
router.post("/login", async (req, res) => {
  try {
    const user = await auth.login(req.body);
    res.status(200).json({ user });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// inseta nuevo usuario
router.post("/user", async (req, res) => {
  try {
    const user = await auth.insertUser(req.body);
    res.status(200).json({ user });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// obtiene todos los usuarios
router.get("/users", async (req, res) => {
  try {
    const user = await auth.getUsers(req.body);
    res.status(200).json({ user });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// obtiene todos los usuarios
router.get("/user/:email", async (req, res) => {
  try {
    const user = await auth.getUserByEmail(req.params.email);
    res.status(200).json({ user });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
