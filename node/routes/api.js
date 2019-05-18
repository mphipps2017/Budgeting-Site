const express = require('express');
const router = express.Router();

router.use('/user', require('./users'));
router.use('/spending', require('./spending'));

router.get('/', (req, res) => {
    res.json({ success: true });
});

module.exports = router;