/*
 * Styling and animation for StudyBuddy
 */

// Click CREATE NEW MEETING
$("#add-new").on("click", function() {
  // Show the form
  $("#add-form").slideToggle(600);
});

// Click Submit in form
$("#add-event").on("click", function() {
  event.preventDefault();
  // Hide the form
  $("#add-form").slideUp(600); 
});
