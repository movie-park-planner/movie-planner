var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var movie = require("../models/planner-todo.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  movie.all(function(data) {
    var hbsObject = {
      movies: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.put("/api/movies/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  movie.update({
    selected: req.body.selected
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;