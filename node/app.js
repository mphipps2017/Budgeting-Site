// Tutorial: https://zellwk.com/blog/crud-express-mongodb/

const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
var db

app.use(bodyParser.urlencoded({extended: true}))

MongoClient.connect('mongodb://matthew:abc123@ds147723.mlab.com:47723/budgetsite', (err, client) => {
    if (err)
        return console.log(err)
    db = client.db('budgetsite')
    app.listen(3000, function() {
        console.log('listening on 3000');
    })
})


app.get('/', (req, res) => { // this is a crud READ function
    res.sendFile(__dirname + '/index.html');
    db.collection('users').find().toArray(function(err, results) {
        console.log(results)
        // send HTML file populated with quotes here
      })
})

app.post('/users', (req, res) => { // this is a crud CREATE function
    console.log(req.body)
    db.collection('users').save(req.body, (err, result) => {
        if (err)
            return console.log(err)
        res.redirect('/')
    })
})