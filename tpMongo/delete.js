var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var removeRestaurants = function(db, callback) {
   db.collection('restaurants').deleteMany(
      { "borough": "Manhattan" },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  removeRestaurants(db, function() {
      db.close();
  });
});

var removeRestaurants = function(db, callback) {
   db.collection('restaurants').deleteOne(
      { "borough": "Queens" },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  removeRestaurants(db, function() {
      db.close();
  });
});

var removeRestaurants = function(db, callback) {
   db.collection('restaurants').deleteMany( {}, function(err, results) {
      console.log(results);
      callback();
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  removeRestaurants(db, function() {
      db.close();
  });
});

var dropRestaurants = function(db, callback) {
   db.collection('restaurants').drop( function(err, response) {
      console.log(response)
      callback();
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  dropRestaurants(db, function() {
      db.close();
  });
});