// Require Files
const router = require("express").Router();
const path = require("path");

// Exercise Route
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Stats Route
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Export File
module.exports = router;
