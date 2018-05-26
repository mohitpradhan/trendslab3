let map : any;
let coolLocations : any[] = [];
let MapMarkers : MapMarker[] = [];

//interface
interface LatLng{
    lat: number,
    lng: number
}

interface GoogleMapsConfig{
    center: LatLng,
    zoom : number
}

//
class MapMarker{
    Address : string;
    Coordinates : LatLng;

    public constructor(address:string){
        this.Address = address;
        this.Coordinates = {lat : 43, lng:-79.38}
    }

}

let Toronto : LatLng = {lat:43, lng: -79.38 }
let initMapConfig = { center: Toronto, zoom: 8};

$.ajax({
    url: './AClocations.json',
    dataType : 'json',
    success: function(data){

        console.log(data);

        for(let cl of data){
            coolLocations.push(cl);
        }
        console.log(coolLocations);
    }
});

function initMap(){
    map = new google.maps.map(
        document.getElementById("map"), initMapConfig
    );    
    
//addMarker(Toronto);
//getLatLng("1 Yonge Street Toronto, Ontario, Canada");

for(let c1 of coolLocations)
{
    let newMapMarker : MapMarker = new MapMarker(cl.address)
    MapMarkers.push();
}

let markersIndex : number = 0;
setLatitudeLongitude();

function setLatitudeLongitude():void{
    //assigns lat n long for each map marker
    MapMarkers[markersIndex].Coordinates = getLatLng(MapMarkers[markersIndex].Address);

    setTimeout(()=>{console.log(MapMarkers[markersIndex]) }, 2000);
}

//console.log(MapMarkers)

function getLatLng(address : string) : LatLng{
    let geocoder : object = new google.maps.Geocoder();

    geocoder.geocode({'address':address}, function(result,status){
        if(status === 'OK'){
            console.log('Latitude:' + result[0].geometry.location.lat());
            console.log('Longitude:' + result[0].geomery.location.lng());

            return{
                lat: result[0].geomery.location.lat(),
                lng: result[0].geometry.location.lng()
            };
        }
        else{
            setInterval(getLatLng(address), 1000);
        }
    });
}

    function addMarker(coord:LatLng) : void{
        let newMarker = new google.maps.Marker({
            position:coord;
            map: map,
            title: 'An excellent place to be'
        })
    }
}