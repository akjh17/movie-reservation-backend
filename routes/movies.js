const router = require('express').Router();
const Movie = require('../models/Movie');

router.post('/', async (req, res) => {
  const movie = new Movie(req.body);
  const saved = await movie.save();
  res.status(200).json(saved);
});

router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.status(200).json(movies);
});

module.exports = router;
