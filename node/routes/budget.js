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

module.exports = router;