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

  // $(".create-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var newCat = {
  //     name: $("#ca").val().trim(),
  //     sleepy: $("[name=sleepy]:checked").val().trim()
  //   };

  //   // Send the POST request.
  //   $.ajax("/api/cats", {
  //     type: "POST",
  //     data: newCat
  //   }).then(
  //     function() {
  //       console.log("created new cat");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

});