var Map = require('./../js/map.js').mapModule;

//DOCUMENT READY will initalize the html
$(document).ready(function() {
  // create the object
  var newMapObject = new Map();
  // define something that the map will need
  var portland = {lat: 45.535, lng: -122.630};
  // call the object function given a known thing
  newMapObject.initMap(portland);
});
