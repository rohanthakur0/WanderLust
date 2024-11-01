

//   mapboxgl.accessToken = mapToken;

//   const map = new mapboxgl.Map({
//     container: "map", // container ID
//     style: "mapbox://styles/mapbox/streets-v11", // Add the style URL
//     center:  listing.geometry.coordinates, // starting position [lng, lat]
//     zoom: 9, // starting zoom
//   });

//   console.log(coordinates);

// const marker1 = new mapboxgl.Marker({ color: "red"})
//   .setLngLat(listing.geometry.coordinates)  //Listing.geometry.coordinates
//   .setPopup(new mapboxgl.Popup({offset: 25})
 
//   .setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking! </p>`))
//   .addTo(map);




  mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

// Create a popup and add it to the map
const popup = new mapboxgl.Popup({ offset: 25 })
  .setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking!</p>`);

// Add a marker and set the popup
new mapboxgl.Marker()
  .setLngLat(listing.geometry.coordinates) // coordinates of the marker
  .setPopup(popup) // sets a popup on this marker
  .addTo(map); // adds the marker to the map
