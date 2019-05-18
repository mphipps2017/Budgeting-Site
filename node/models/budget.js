const ObjectId = require('mongodb').ObjectId;

const mongo = require('../helpers/mongoUtil.js');

const collectionName = 'budget';

//Inserts new budget into the collection collection
exports.new = (id, data, callback) => {
    mongo.getDb().collection(collectionName).insertOne({
      userID: id,
      current: true,
      dates:{
          start: '5/18/2019',
          end: 'ongoing',
      },
      timePeriod: 12, //this unit is in months (12 for default app)
      categories: data.categories,
    }, function(err, res) {
      if (err) throw err;
    });
  };