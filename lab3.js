var map;
var Toronto = { lat: 43, lng: -79.38 };
var initMapConfig = { center: Toronto, zoom: 8 };
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), initMapConfig);
}
