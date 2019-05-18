const express = require('express');
const spendingModel = require('../models/spending.js');

const router = express.Router();
  
//Create a new Spending Year for a given user
router.post('/', (req, res) => {
  spendingModel.new(req.query, (err) => {
    if (err) return next(err);
    res.json({ success: true });
  });
  res.send(req.query);
});

//Get a spending year by it's document ID
router.get('/:id', (req, res, next) => {
  spendingModel.get(req.params.id, (err, value) => {
    if (err) return next(err);
    res.json(value);
  });
});

module.exports = router;