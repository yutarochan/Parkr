/*
Parking Map
Developed by: Yuya Jeremy Ong (yuyajeremyong@gmail.com)
*/

var map;

// Google Map Handler
function initMap() {
    // Initial Map Zoom
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7932421, lng: -77.8634748},
        zoom: 15
    });

    // Initialize Map Markers
    var beaver = new google.maps.Marker({
        position: {lat: 40.7919328, lng: -77.8635994},
        map: map,
        label: 'A'
    });
    var fraser = new google.maps.Marker({
        position: {lat: 40.7928417, lng: -77.8641387},
        map: map,
        label: 'B'
    });
    var pugh = new google.maps.Marker({
        position: {lat: 40.7945447, lng: -77.8619748},
        map: map,
        label: 'C'
    });

}

$(document).ready(function() {
    $(".dropdown-button").dropdown();
});
