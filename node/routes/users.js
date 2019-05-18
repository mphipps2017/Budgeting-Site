const express = require('express');
const userModel = require('../models/users.js');

const router = express.Router();

//Grab a User's document (based on document ID)
router.get('/user', (req, res, next) => {
  userModel.get(req.params.id, (err, value) => {
    if (err) return next(err);
    res.json(value);
  });
});

router.get('/:id', (req, res, next) => {
  userModel.get(req.params.id, (err, value) => {
    if (err) return next(err);
    res.json(value);
  });
});
  
//Create a new User
router.post('/', (req, res) => {
  userModel.new(req.body, (err) => {
    if (err) return next(err);
    res.json({ success: true });
  });
  res.send(req.body);
});

//Handles put request for changing password
router.put('/:id', (req, res, next) => {
  userModel.update(req.params.id, req.body, (err) => {
    if (err) return next(err);
    res.json({ success: true });
  });
});

module.exports = router;