// Create a map of the United States of America

//Initialize the map & set view to our chosen geographical coordinates & a zoom level
let map = L.map('mapid').setView([37.8, -96], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    id: 'mapbox/light-v9',
    // attribution: ..., 
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY,
    }).addTo(map);

L.geoJson(statesData).addTo(map);


// colorberewer 2.0 color advice for cartography: https://colorbrewer2.org/#type=sequential&scheme=YlGn&n=9
// https://colorbrewer2.org/#type=sequential&scheme=RdPu&n=9 

function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}


// define a styling function for our GeoJSON layer so that its fillColor depends on feature.properties.density property, 
// also adjusting the appearance a bit and adding a nice touch with dashed stroke.

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(statesData, {style: style}).addTo(map);


//INTERACTIVE: Make the states highlighted visually in some way when they are hovered with a mouse. 
// First we’ll define an event listener for layer mouseover event:

function highlightFeature(e) {
    let layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}
// ^^ we got access to the layer that was hovered through e.target,^^ 
// set a thick grey border on the layer as our highlight effect, 
// also bringing it to the front so that the border doesn’t clash with nearby states 
// (but not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover).

// mouse-out
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

// The handy geojson.resetStyle method will reset the layer style to its default state (defined by our style function). 
// For this to work, make sure our GeoJSON layer is accessible through the geojson variable by defining it before our 
// listeners and assigning the layer to it later:
// var geojson;
// ... our listeners
// geojson = L.geoJson(...);


// As an additional touch, let’s define a click listener that zooms to the state:
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}


// Now we’ll use the onEachFeature option to add the listeners on our state layers:

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}
geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

// This makes the states highlight nicely on hover and gives us the ability to add other interactions inside our listeners.




