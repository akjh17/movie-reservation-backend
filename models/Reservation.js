const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  showId: { type: mongoose.Schema.Types.ObjectId, ref: 'Show' },
  seats: [Number]
});

module.exports = mongoose.model('Reservation', ReservationSchema);
