/*
 * Styling and animation for StudyBuddy
 */

 $("#add-new").on("click", function() {
   $("main").html(`
     <form>
       <label for="name">Name</label><br/>
       <input name="name" type="text"><br/>
       <label for="date">Date &amp; Time</label><br/>
       <input name="date" type="date"><br/>
       <label for="duration">Duration (in minutes)</label><br/>
       <input name="duration" type="number"><br/>
       <label for="address">Address</label><br/>
       <input name="address" type="text">
     </form>
   `).addClass('card');
 });
