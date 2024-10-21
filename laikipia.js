
// Initialize the map
var map = L.map('map').setView([0.8,37.5], 10); // Set the initial coordinates and zoom level

// Create a variable for each tile layer
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
});

var CartoDB_DarkMatter = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
    }
);

var googleStreets = L.tileLayer(
    "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
);

var googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

var googleHybrid = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Add the OpenStreetMap layer as the default layer
osm.addTo(map);

// Create a layer control to switch between map and satellite views
var baseMaps = {
    "OpenStreetMap": osm,
    "Dark Theme": CartoDB_DarkMatter,
    "Google Map": googleStreets,
    "Satellite view": googleSat,
    "Hybrid view": googleHybrid,
};

// Add the layer control to the map
L.control.layers(baseMaps).addTo(map);

// You can add markers, polygons, and other features to your layers as needed
// For example, adding a marker:
var marker = L.marker([-0.2965,37.7238]).addTo(map);
marker.bindPopup("Laikipia County").openPopup();
