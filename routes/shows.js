const router = require('express').Router();
const Show = require('../models/Show');

router.post('/', async (req, res) => {
  const show = new Show(req.body);
  const saved = await show.save();
  res.status(200).json(saved);
});

router.get('/', async (req, res) => {
  const shows = await Show.find().populate('movieId');
  res.status(200).json(shows);
});

module.exports = router;
