//Models Serve to the DB and get from the DB
const ObjectId = require('mongodb').ObjectId;

const mongo = require('../helpers/mongoUtil.js');

const collectionName = 'users';

//Inserts new User into the users collection
exports.new = (data, callback) => {
  console.log(data);
  mongo.getDb().collection(collectionName).insertOne({
    username: data.username,
    password: data.password,
    name: data.name,
    currentBudget: undefined,
    allBudgets: [],
  }, function(err, res) {
    if (err) throw err;
  });
};

exports.get = (id, callback) => {
  mongo.getDb().collection(collectionName).findOne({ _id: ObjectId(id) }, (err, result) => {
    callback(err, result);
  });
};