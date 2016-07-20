var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var Queries = require('./queries')

// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  Queries.insertDocuments(db, function (ret) {
    console.log(ret);
    db.close();
  })

});
