const ObjectId = require('mongodb').ObjectId;

const mongo = require('../helpers/mongoUtil.js');

const collectionName = 'spending';

//Inserts new Spending Year
exports.new = (data, callback) => {
    mongo.getDb().collection(collectionName).insertOne({
        userID: data.id,
        year: data.year,
        months: {}, //edit this to include the object as definned in my project plans
    }, function(err, res) {
        if (err) throw err;
    });
};

exports.get = (id, callback) => {
    mongo.getDb().collection(collectionName).findOne({ _id: ObjectId(id) }, (err, result) => {
      callback(err, result);
    });
  };