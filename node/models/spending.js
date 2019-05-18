const ObjectId = require('mongodb').ObjectId;

const mongo = require('../helpers/mongoUtil.js');

const collectionName = 'spending';

//Inserts new User into the users collection
exports.new = (data, callback) => {
    mongo.getDb().collection(collectionName).insertOne({
        userID: ObjectId(data.id),
        year: data.year,
        months: {}, //edit this to include the object as definned in my project plans
    }, function(err, res) {
        if (err) throw err;
    });
};