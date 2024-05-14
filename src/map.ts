import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.baseApiUrl="http://127.0.0.1:9999"
mapboxgl.accessToken = 'pk.xx';
const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'https://demotiles.maplibre.org/style.json', // style URL
	center: [-74.5, 40], // starting position [lng, lat]
	zoom: 9, // starting zoom
});