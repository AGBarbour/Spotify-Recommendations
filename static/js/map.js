// Map variables
var mapZoom = 2
var mapCenter = [20, 0]

// Create Map
var myMap = L.map("map", {
    center: mapCenter ,
    zoom: mapZoom
});
  
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
maxZoom: 18,
id: "mapbox.dark",
accessToken: API_KEY
}).addTo(myMap);


// Loop through locations and create city and state markers
for (var i = 0; i < locations.length; i++) {
// Setting the marker radius for the state by passing market into the markerSize function
    try {
        L.circle(locations[i].Coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "#191414",
        fillColor: "#1db954",
        radius: 100000
        }).bindPopup("<h3 style='text-shadow: none'>" + locations[i].country.name + "</h3> <hr> <h3 style='text-shadow: none'>Percent of Top Songs Available: " + locations[i].country.market + "</h3>").addTo(myMap)}
    catch(error) {
        console.log(`Coordinates not found: ${locations[i].country.name}`)
    }
};



L.Map.addInitHook(function() {
    var slides = document.querySelector('.slides'),
        zoom = Number(slides.style.zoom);

    // Reveal.js sometimes use the zoom CSS property, but sometimes a scale
    // transform instead. We handle both.
    if (zoom) {
        this._container.style.zoom = 1/zoom;
    } else {
        zoom = Number(slides.style.transform.replace(/.*scale\(([0-9\.]+)\).*/, '$1'));
        this._container.style.transform = 'scale(' + (1 / zoom) + ')';
    }

    this.invalidateSize();
});

Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if (event.currentSlide){ // assuming your 5th slide is the one with the map
        myMap.invalidateSize(false); // assuming that map holds the the reference to your leaflet instance
    }
} );