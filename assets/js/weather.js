//Variables for building query URL
var API_key = '7669666f22479d98';
var state = "CO";
var city = "Denver";

//URL to query database
var queryURL = "https://api.wunderground.com/api/" + API_key + "/forecast/q/" + state + "/" + city + ".json";

//AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).done(function (response) {

  //log response
  console.log(response);
});