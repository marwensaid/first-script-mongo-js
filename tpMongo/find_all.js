var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db, function() {
      db.close();
  });
});

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "borough": "Manhattan" } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
}

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db, function() {
      db.close();
  });
});

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "address.zipcode": "10075" } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "grades.grade": "B" } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "grades.score": { $gt: 30 } } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find( { "grades.score": { $lt: 10 } } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find(
     { "cuisine": "Italian", "address.zipcode": "10075" }
   );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find(
       { $or: [ { "cuisine": "Italian" }, { "address.zipcode": "10075" } ] }
   );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});

var findRestaurants = function(db, callback) {
   var cursor =db.collection('restaurants').find().sort( { "borough": 1, "address.zipcode": 1 } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findRestaurants(db, function() {
      db.close();
  });
});

