function initialize() {
  var map_canvas = document.getElementById('map_canvas');
  var map_options = {
    center: new google.maps.LatLng(48.5778309,7.7410011),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(map_canvas, map_options);
  new google.maps.Marker({
    position: new google.maps.LatLng(48.5778309,7.7410011),
    icon: 'images/location.png',
    map: map
  });
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('legend'));
}
google.maps.event.addDomListener(window, 'load', initialize);
