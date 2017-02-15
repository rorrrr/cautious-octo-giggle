var initialize = function(){
  
  var center = {lat:40.712784, lng: -74.005941};
  var zoom = 10;
  var container = document.getElementById('main-map');

  var mainmap = new MapWrapper(center, zoom, container);

  var centerString = '<p id="content">"this is the center of the map"</p>'

  // var newContent = 'new random clicker'

  // var centerInfoWindow = new google.maps.InfoWindow({
  //   content: centerString
  // });

  mainmap.addMarker(center, centerString);
  mainmap.addClickEvent();

}



window.onload = initialize;