const express = require('express');
const spendingModel = require('../models/spending.js');

const router = express.Router();
  
//Create a new Spending Year for a given user
router.post('/', (req, res) => {
  spendingModel.new(req.body, (err) => {
    if (err) return next(err);
    res.json({ success: true });
  });
  res.send(req.body);
});

//Get a spending year by it's document ID
router.get('/:id', (req, res, next) => {
  spendingModel.get(req.params.id, (err, value) => {
    if (err) return next(err);
    res.json(value);
  });
});

router.put('/:id', (req, res, next) => { //this is the id of the budget document
  budgetModel.update(req.params.id, req.body, (err) => {
      if (err) return next(err);
      res.json({ success: true });
  });
});

module.exports = router;