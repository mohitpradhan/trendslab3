var map;
var coolLocations = [];
var MapMarkers = [];
//
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
        this.Coordinates = { lat: 43, lng: -79.38 };
    }
    return MapMarker;
}());
var Toronto = { lat: 43, lng: -79.38 };
var initMapConfig = { center: Toronto, zoom: 8 };
$.ajax({
    url: './AClocations.json',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var cl = data_1[_i];
            coolLocations.push(cl);
        }
        console.log(coolLocations);
    }
});
function initMap() {
    map = new google.maps.map(document.getElementById("map"), initMapConfig);
    //addMarker(Toronto);
    //getLatLng("1 Yonge Street Toronto, Ontario, Canada");
    for (var _i = 0, coolLocations_1 = coolLocations; _i < coolLocations_1.length; _i++) {
        var c1 = coolLocations_1[_i];
        var newMapMarker = new MapMarker(cl.address);
        MapMarkers.push();
    }
    var markersIndex = 0;
    setLatitudeLongitude();
    function setLatitudeLongitude() {
        //assigns lat n long for each map marker
        MapMarkers[markersIndex].Coordinates = getLatLng(MapMarkers[markersIndex].Address);
        setTimeout(function () { console.log(MapMarkers[markersIndex]); }, 2000);
    }
    //console.log(MapMarkers)
    function getLatLng(address) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (result, status) {
            if (status === 'OK') {
                console.log('Latitude:' + result[0].geometry.location.lat());
                console.log('Longitude:' + result[0].geomery.location.lng());
                return {
                    lat: result[0].geomery.location.lat(),
                    lng: result[0].geometry.location.lng()
                };
            }
            else {
                setInterval(getLatLng(address), 1000);
            }
        });
    }
    function addMarker(coord) {
        var newMarker = new google.maps.Marker({
            position: coord,
            map: map,
            title: 'An excellent place to be'
        });
    }
}
