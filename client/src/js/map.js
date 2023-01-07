let map = L.map("map").setView([26.8570872, 81.007659], 13);
let osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let acc = position.coords.accuracy;
        const coords = [lat, long];
        console.log(lat, long);

        let marker = L.marker(coords);
        let circle = L.circle(coords, {
            color: "red",
            fillColor: "transparent",
            fillOpacity: 0.5,
            radius: 1000,
        });

        let featureGroup = L.featureGroup([marker, circle]).addTo(map);
        map.fitBounds(featureGroup.getBounds());
    });
} else {
    alert("Update your existing browser or install a new one !");
}
