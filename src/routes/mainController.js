const express = require("express");
const router = express.Router();

router.get("/message", async (req, res) => {
  try {
    const user = await auth.login(req.body);
    res.status(200).json({ message: "SOCKET IO working....." });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
