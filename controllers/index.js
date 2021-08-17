// Require Files
const router = require("express").Router();
const view = require("./viewRoute");
const apiRoute = require("./apiRoute");

// Use statements
router.use("/", view);
router.use("/api", apiRoute);

// Exporting Files
module.exports = router;
