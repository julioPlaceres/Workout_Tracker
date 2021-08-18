// Initial Files loaded
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const controllers = require("./controllers");

// Start Port and Express instance
const PORT = process.env.PORT || 3001; //3000
const app = express();

// Using statements for the app 
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connection to MongoDb
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// using Routes
app.use(controllers);

// Start Server
app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
