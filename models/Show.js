const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  showTime: String,
  totalSeats: Number,
  bookedSeats: [Number] // e.g. [1, 2, 3]
});

module.exports = mongoose.model('Show', ShowSchema);
