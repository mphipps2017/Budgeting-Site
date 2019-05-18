// Tutorial for catching up if forgot basics https://zellwk.com/blog/crud-express-mongodb/
const express = require('express');
const app = express();
const mongo = require('./helpers/mongoUtil.js');
const bodyParser = require('body-parser'); // Used for accessing the body of requests

//The body parser is used for parsing JSON data
app.use(bodyParser.json());

//Tells app to use /routes/api.js for handling all HTTp requests
app.use(require('./routes/api.js'));

//Starts having app listen for HTTP requests
app.listen(3000, function() {
    console.log('Listening on port 3000...')
    mongo.connectToServer();
})