//need to figure out what all the ids are to hook up the database to the html-


//Init Firebase
  var config = {
    apiKey: "AIzaSyBJZvVH9uhCJVKjLZKED_YjUQtTv3ZOzZg",
    authDomain: "study-buddy-1.firebaseapp.com",
    databaseURL: "https://study-buddy-1.firebaseio.com",
    projectId: "study-buddy-1",
    storageBucket: "study-buddy-1.appspot.com",
    messagingSenderId: "242196700602"
  };

firebase.initializeApp(config);

var database = firebase.database();

// Button for adding meeting database
$("#").on("click", function(event){
  event.preventDefault();

//User meeting input
var varName = $("#").val().trim();
var varName = $("#").val().trim();
var varName = $("#").val().trim();
var varName = $("#").val().trim();
var varName = $("#").val().trim();

// Object that will hold the meeting database

var newMeeting = {
  start: fbStart,
  end: fbEnd,
  desc: fbDesc,
  name: fbName,
};

//Push the meeting data to firebase
database.ref().push(newMeeting);

//Log information to console for easy review
  console.log(newMeeting.#);
  console.log(newMeeting.#);
  console.log(newMeeting.#);
  console.log(newMeeting.#);
  console.log(newMeeting.#);

  //Alert user that meeting was scheduled
  //Not sure if we need this in the app or not
  alert("Meeting Scheduled Successfully");

  //clear all the input boxes after meeting submissio
