const router = require('express').Router();
const Reservation = require('../models/Reservation');
const Show = require('../models/Show');

router.post('/', async (req, res) => {
  const { userId, showId, seats } = req.body;

  const show = await Show.findById(showId);
  const alreadyBooked = show.bookedSeats;

  // Check if seat already booked
  for (let seat of seats) {
    if (alreadyBooked.includes(seat)) {
      return res.status(400).json({ message: `Seat ${seat} already booked.` });
    }
  }

  // Update seats
  show.bookedSeats.push(...seats);
  await show.save();

  const newReserve = new Reservation({ userId, showId, seats });
  const saved = await newReserve.save();
  res.status(200).json(saved);
});

module.exports = router;
