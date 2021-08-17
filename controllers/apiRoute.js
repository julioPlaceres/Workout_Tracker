// Require Files
const Workout = require("../models/workout.js");
const router = require("express").Router();

// Get all workouts
router.get("/workouts", async (req, res) => {
  try {
    // Aggregate all workout duration
    const data = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ]);
    // Send response
    res.json(data);
  }
  catch (err) { res.json(err); }
});

    // add new workout
router.post("/workouts", async ({ body }, res) => {
  try {
    const data = Workout.create(body);
    // send response data
    res.json(data);
  }
  catch (err) { res.json(err); }
});

// Update by ID
router.put("/workouts/:id", async ({ body, params }, res) => {
  try{
    const data = await Workout.findByIdAndUpdate(
      { _id: `${params.id}` },
      { $push: { exercises: body } }
    );
    res.json(data);
  }
  catch(err) { res.json(err); }
});

  // Get workout range data
router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration", }, }, }, ])
    .sort({ _id: -1 })
    .limit(7)
    .then((data) => { res.json(data); })
    .catch((err) => { res.json(err); });
});

// Export module
module.exports = router;
