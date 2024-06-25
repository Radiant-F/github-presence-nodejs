import express from "express";
import path from "path";
const router = express.Router();

router.get("^/$|/index(.html)?", (req, res) => {
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  } else if (req.accepts("json")) res.json({ message: "welcome!" });
});

module.exports = router;
