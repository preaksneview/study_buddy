/*
 * Styling and animation for StudyBuddy
 */

// Click CREATE NEW MEETING
$("#add-new").on("click", function() {
  // Hide the button
  $("#add-new").slideToggle();
  // Show the form
  $("#add-form").slideToggle();
});

// Click Submit in form
$("#add-event").on("click", function() {
  // Hide the form
  $("#add-form").slideToggle();
  // Show the button
  $("#add-new").slideToggle();
});
