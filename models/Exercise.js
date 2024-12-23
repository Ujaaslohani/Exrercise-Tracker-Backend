const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    userId: String,
    exercises: [
      {
        exerciseId: String,
        name: String,
        duration: Number,
        date: Date,
        caloriesBurned: Number,
      },
    ],
  });
  
  const Exercise = mongoose.model('Exercise', exerciseSchema);
  module.exports = Exercise;