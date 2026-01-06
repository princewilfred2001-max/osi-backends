const express = require("express");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

// TEMP PROJECT DATA
const projects = [
  {
    id: 1,
    title: "Website Redesign",
    status: "Active"
  },
  {
    id: 2,
    title: "Mobile App UI",
    status: "Pending"
  }
];

router.get("/all", auth, (req, res) => {
  res.json(projects);
});

module.exports = router;