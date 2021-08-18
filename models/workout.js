// Require Files
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: {
    type: Array,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  day: {
    type: Date,
    default: Date.now,
  },
});

// Export Modules
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
