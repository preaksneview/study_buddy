/*
 * Styling and animation for StudyBuddy
 */

// Click expand
$(".expander").on("click", function() {
  event.stopPropagation();
  if ($(this).closest('tr').next('tr').css('display') === 'none') {
    $(this).closest('tr')
      .next('tr')
      .css({
        'display': 'table-row',
        'opacity': 0,
      })
      .animate({opacity: 1}, 500);
  }
  else {
    $(this).closest('tr')
    .next('tr')
    .animate({opacity: 0}, 500, function() {
      $(this).css('display','none');
    });
  }
});

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
