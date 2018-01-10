function initMap() {
  var uluru = { lat: -25.363, lng: 131.044 };
  var pinLocation = uluru;
    var map = new google.maps.Map(document.getElementById('map-section'), {
      zoom: 4,
      center: pinLocation
    });
    var marker = new google.maps.Marker({
      position: pinLocation,
      map: map
    });
}

var geocoder = new google.maps.Geocoder();
geocoder.geocode( { "address": "Brussels" }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
        var location = results[0].geometry.location,
            lat = location.lat(),
            lng = location.lng();
      alert("Latitude: " + lat);
      alert("Longitude: " + lng);
    }
});
