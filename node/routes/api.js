const express = require('express');
const router = express.Router();

router.use('/', require('./users'));
router.use('/user', require('./users'));

module.exports = router;