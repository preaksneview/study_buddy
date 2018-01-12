var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-section'), {
    center: {lat: 39.7392, lng: -104.991},
    zoom: 8
  });
}
  
$(document).on("click", ".expander", function () {

    let mapStreetAddress = $(this).attr("street");
    let mapCityAddress = $(this).attr("city");
    let mapStateAddress = $(this).attr("state");
  
    var queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + mapStreetAddress + ',' + mapCityAddress + ',' + mapStateAddress + '&key=AIzaSyBlgTkKRyGfGoEPtxLX-IfB31voIkAOOIY';
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function (response) {
      console.log(response);
  
      let pinDrop = response.results[0].geometry.location;
  
      function initMap(pin) {

        // var uluru = {lat: -25.363, lng: 131.044};
        var pinDrop = pin
        var map = new google.maps.Map(document.getElementById('map-section'), {
          zoom: 12,
          center: pinDrop
        });
        var marker = new google.maps.Marker({
          position: pinDrop,
          map: map
        });
      }  
        initMap(pinDrop);
    })
  });

