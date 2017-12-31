//take local variables for new event
//===============================================================
//establish variables
var eventName;
var eventStart;
var eventEnd;
var eventDescription;

//function to set local variables
function newEvent(event) {

    //prevent submit default
    event.preventDefault();

    //set variables
    eventName = $("#event-name").val().trim();
    eventStart = $("#event-start").val();
    eventEnd = $("#event-end").val();
    eventDescription = $("#event-description").val().trim();

    console.log(eventName);
    console.log(eventStart);
    console.log(eventEnd);
    console.log(eventDescription);
}

//run function on submit click
$("#submit-entry").on("click", newEvent);
//===============================================================


//push to google calendar

//pull next 5 upcoming events

//write to display