var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var movie = require("../models/planner-todo.js");

router.get(“/”, function(req, res) {
  movie.all(function(data) {
    var hbsObject = {
      moviescomments: data
    };
    console.log(hbsObject);
    res.render(“index”, hbsObject);
  });
});

router.get("/day", function(req, res) {
  movie.findOne("day", req.body.day, function(data) {
    var hbsObject = {
      movies: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/comments", function(req, res) {
  movie.createComment([
    "name", "comment"
  ], [
    req.body.name, req.body.comment
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
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
