function initMap() {
  var uluru = { lat: -25.363, lng: 131.044 };
  var pinLocation = uluru;
    var map = new google.maps.Map(document.getElementById('map-section'), {
      zoom: 10,
      center: pinLocation
    });
    var marker = new google.maps.Marker({
      position: pinLocation,
      map: map
  });
}

$(document).on("click", ".expander", function () {
  let mapStreetAddress = "4321 Broadway";
  let mapCityAddress = "Denver";
  let mapStateAddress = "CO";

  var queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + mapStreetAddress + ',' + mapCityAddress + ',' + mapStateAddress + '&key=AIzaSyBlgTkKRyGfGoEPtxLX-IfB31voIkAOOIY';

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {
    console.log(response.results[0].geometry.location);
  })
});