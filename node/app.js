// Tutorial for catching up if forgot basics https://zellwk.com/blog/crud-express-mongodb/
const express = require('express');
const app = express();
const mongo = require('./helpers/mongoUtil.js');
var db;

app.use(require('./routes/api.js'));

app.listen(3000, function() {
    console.log('Listening on port 3000...')
    mongo.connectToServer();
})