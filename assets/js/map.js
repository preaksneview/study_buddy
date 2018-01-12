function initMap(pin) {
  var pinLocation = pin;
    var map = new google.maps.Map(document.getElementById('map-section'), {
      zoom: 10,
      center: pinLocation
    });
    var marker = new google.maps.Marker({
      position: pinLocation,
      map: map
  });
}

let denverLocation = { lat: 39.7392, lng: 104.9903 };
initMap(denverLocation);

$(document).on("click", ".expander", function () {

  let mapStreetAddress = $(this).attr("street");
  let mapCityAddress = $(this).attr("city");
  let mapStateAddress = $(this).attr("state");

  var queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + mapStreetAddress + ',' + mapCityAddress + ',' + mapStateAddress + '&key=AIzaSyBlgTkKRyGfGoEPtxLX-IfB31voIkAOOIY';

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {
    console.log(response.results[0].geometry.location);

    let pinDrop = response.results[0].geometry.location;

    initMap(pinDrop);
  })
});