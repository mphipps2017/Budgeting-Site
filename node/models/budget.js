const ObjectId = require('mongodb').ObjectId;

const mongo = require('../helpers/mongoUtil.js');

const collectionName = 'budget';

//Inserts new budget into the collection collection
exports.new = (id, data, callback) => {
  mongo.getDb().collection(collectionName).insertOne({
    userID: id,
    dates:{
        start: '5/18/2019',
        end: null,
    },
    timePeriod: 12, //this unit is in months (12 for default app)
    budgetSize: data.size, //This amount is budget per year
    categories: data.categories,
  }, function(err, res) {
    if (err) throw err;
  });
};

//Sets categories in the doucment with a given ID
exports.update = (id, data, callback) => {
    //The $set keyword is used to indicate that a part of the document is being updated
    mongo.getDb().collection(collectionName).updateOne({ _id: ObjectId(id) }, {$set:{
    categories: data.categories,
  }}, (err) => {
    callback(err);
  });
};

//Returns a budget document with the given ID
exports.get = (id, callback) => {
  mongo.getDb().collection(collectionName).findOne({ _id: ObjectId(id) }, (err, result) => {
      callback(err, result);
  });
};