const router = require('express').Router();
const User = require('../models/User');

// Simple Register (no encryption for now)
router.post('/register', async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.status(200).json(savedUser);
});

// Simple Login (no JWT for now)
router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user || user.password !== req.body.password) {
    return res.status(400).json('Invalid credentials');
  }
  res.status(200).json(user);
});

module.exports = router;
