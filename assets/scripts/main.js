"use strict";

//map:
//Create map:
const centroid = [50.71036, 4.36889];
const map = L.map('mapid').setView(centroid, 16.4);

//Add tiles & marker:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([50.71036, 4.36889]).addTo(map);
