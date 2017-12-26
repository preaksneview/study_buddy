/*
 * Styling and animation for StudyBuddy
 */

$("#add-new").on("click", function() {
  $("main").slideDown(1000, function() {
    $("main").html(`
     <form>
       <label for="name">Name</label><br/>
       <input name="name" type="text"><br/>
       <label for="date">Date &amp; Time</label><br/>
       <input name="date" type="date"><br/>
       <label for="duration">Duration (in minutes)</label><br/>
       <input name="duration" type="number"><br/>
       <label for="address">Address</label><br/>
       <input name="address" type="text"><br/>
       <input type="submit" id="add-event" name="Add event">
     </form>
   `).addClass('card')
   .css({
     'margin': '1vh',
     'border': '1px solid #52c7b8',
     'border-radius': '5px',
     'padding': '1vh',
     'line-height': '2rem'
   });
  });

  $("input").css({
    'border': '1px solid rgba(0,0,0,0.77)',
    'border-radius': '5px'
  });

  $("#add-event").css({
    'background-color': '#ff5252',
    'border-radius': '5px',
    'margin': '1vh 0',
    'border': 0,
    'padding': '5px 10px',
    'height': '3rem',
    'text-align': 'center',
    'color': 'rgba(255,255,255,0.84)'
  })
});
