// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".add-checkbox").on("click", function(event) {
    console.log("the click worked!!!!!!");
    var id = $(this).data("id");
    var selected = $(this).data("selected");

    var selectedState = {
      selected: selected
    };

    // Send the PUT request.
    $.ajax("/api/movies/" + id, {
      type: "PUT",
      data: selectedState
    }).then(
      function() {
        console.log("selected movies to", selected);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newComment = {
      name: $("#first_name").val().trim(),
      comment: $("#textarea1").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/comments", {
      type: "POST",
      data: newComment
    }).then(
      function() {
        console.log("created new comment");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
