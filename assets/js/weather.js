var API_key = '7669666f22479d98';


    // Here we are building the URL we need to query the database
    var queryURL = "https://api.wunderground.com/api/" + API_key + "/forecast/q/CO/Denver.json";

    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      // Create CODE HERE to Log the queryURL
      console.log(queryURL);
      // Create CODE HERE to log the resulting object
      console.log(
        response
      );


    });