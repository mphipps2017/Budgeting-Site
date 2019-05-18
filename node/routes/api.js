const express = require('express');
const router = express.Router();

//Tells router to use functions defined in the given file when a request has the specific '/stuff' call
router.use('/user', require('./users'));
router.use('/spending', require('./spending'));
router.use('/budget', require('./budget'));

router.get('/', (req, res) => {
    res.json({ success: true });
});

module.exports = router;