const express = require('express');
const budgetModel = require('../models/budget.js');

const router = express.Router();

//create a new budget
router.post('/:id', (req, res) => {
    budgetModel.new(req.params.id, req.body, (err) => { 
        if (err) return next(err);
        res.json({ success: true });
    });
        res.send(req.query);
});


//Resets the querry in a current document based on the user input
router.put('/:id', (req, res, next) => { //this is the id of the budget document
    budgetModel.update(req.params.id, req.body, (err) => {
        if (err) return next(err);
        res.json({ success: true });
    });
});

//Returns budget document with the given id
router.get('/:id', (req, res, next) => {
    budgetModel.get(req.params.id, (err, value) => {
      if (err) return next(err);
      res.json(value);
    });
  });

module.exports = router;