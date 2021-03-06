//Models Serve to the DB and get from the DB
const ObjectId = require('mongodb').ObjectId;

const mongo = require('../helpers/mongoUtil.js');

const collectionName = 'users';

//Inserts new User into the users collection
exports.new = (data, callback) => {
  mongo.getDb().collection(collectionName).insertOne({
    username: data.username,
    password: data.password,
    name: data.name,
    currentBudget: undefined,
    budgets: [],
    spending: [],
  }, function(err, res) {
    if (err) throw err;
  });
};

//Grabs the document with the given ID from the collection
exports.get = (id, callback) => {
  mongo.getDb().collection(collectionName).findOne({ _id: ObjectId(id) }, (err, result) => {
    callback(err, result);
  });
};

//Sets password of the document with given ID
exports.update = (id, data, callback) => {
    mongo.getDb().collection(collectionName).updateOne({ _id: ObjectId(id) }, {$set:{
    password: data.password,
  }}, (err) => {
    callback(err);
  });
};