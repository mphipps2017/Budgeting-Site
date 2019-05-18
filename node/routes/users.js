const express = require('express');
const usersModel = require('../models/users.js');

const router = express.Router();

//Grab a User's document (based on document ID)
router.get('/user', (req, res, next) => {
  usersModel.get(req.params.id, (err, value) => {
    if (err) return next(err);
    res.json(value);
  });
});

router.get('/:id', (req, res, next) => {
  usersModel.get(req.params.id, (err, value) => {
    if (err) return next(err);
    res.json(value);
  });
});
  
//Create a new User
router.post('/', (req, res) => {
  usersModel.new(req.query, (err) => { // req.query gives the body of the post request
    if (err) return next(err);
    res.json({ success: true });
  });
  res.send(req.query);
});

module.exports = router;