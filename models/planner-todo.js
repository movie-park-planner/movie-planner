// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var movie = {
  all: function(cb) {
    orm.all("movie_showings", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  findOne: function(cols, vals, cb) {
    orm.findOne("movie_showings", cols, vals, function(res) {
      cb(res);
    });
  },

  createComment: function(cols, vals, cb) {
    orm.create("comments", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("movie_showings", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = movie;
