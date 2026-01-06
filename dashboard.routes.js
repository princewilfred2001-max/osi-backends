const express = require("express");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", auth, (req, res) => {
  res.json({
    message: "Dashboard loaded",
    user: req.user
  });
});

module.exports = router;