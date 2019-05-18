const express = require('express');
const spendingModel = require('../models/spending.js');

const router = express.Router();

//Grab a spending document (based on document ID)
router.get('/spending', (req, res, next) => {
  res.json({ success: true });
  console.log('hit');
});
  
//Create a new User
router.post('/spending', (req, res) => {
  spendingModel.new(req.query, (err) => { // req.query gives the body of the post request
    if (err) return next(err);
    res.json({ success: true });
  });
  res.send(req.query);
});

module.exports = router;