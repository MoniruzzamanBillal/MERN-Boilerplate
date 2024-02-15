const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
  return res.status(200).json({ message: "welcome to todo route!" });
});

module.exports = router;
