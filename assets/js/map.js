//initialise map
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map-section'), {
        center: { lat: 39.7392, lng: -104.991 },
        zoom: 8
    });
}

//on expander click drop pin
$(document).on("click", ".expander", function () {

    //set pull variables from table
    let mapStreetAddress = $(this).attr("street");
    let mapCityAddress = $(this).attr("city");
    let mapStateAddress = $(this).attr("state");
    console.log(mapStreetAddress);

    var queryURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + mapStreetAddress + ',' + mapCityAddress + ',' + mapStateAddress + '&key=AIzaSyBlgTkKRyGfGoEPtxLX-IfB31voIkAOOIY';

    //convert address to lat. and long. from Geocode API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {

        let pinDrop = response.results[0].geometry.location;

        //function to center map and drop pin
        function initMap(pin) {

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
        //run initMap with address pin dropping
        initMap(pinDrop);
    })
});

