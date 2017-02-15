var MapWrapper = function(coords, zoom, container){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}


MapWrapper.prototype = {

  addMarker: function(coords, content) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    var windowInfo = new google.maps.InfoWindow({
      content: content
    });
    marker.addListener('click', function() {
      windowInfo.open(this.googleMap, marker);
    })
  },

  addClickEvent: function(newContent) 
  {
    google.maps.event.addListener(this.googleMap, 'click', function(event)
    {
      var lngY = event.latLng.lng();
      var latX = event.latLng.lat();
      var position = {lat: latX, lng:lngY}
      this.addMarker(position);

    }.bind(this));
  }


    
}