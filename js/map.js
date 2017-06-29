var apiKey=require('./../.env').apiKey;

function Map() {}

Map.prototype.initMap = function (mapPosition) {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: mapPosition
  });
  var marker = new google.maps.Marker({
    position: mapPosition,
    map: map
  });
};



exports.mapModule = Map;
