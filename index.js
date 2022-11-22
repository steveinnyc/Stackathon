let map;

function initMap() {
  let options = {
    center: { lat: 40.730, lng: -74.006 },
    zoom: 13,
  }

  map = new google.maps.Map(document.getElementById("map"), options);

  function addMarker(props) {
    let markers = new google.maps.Marker({
    position: props.coords,
    map: map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  })

  // let infoWindow = new google.maps.infoWindow({
  //   content: props.content
  // })

  // markers.addListener('click', function(){
  //   infoWindow.open(content)
  // })
}

  addMarker({
    coords: {lng:-73.922723, lat:40.796032},
    content:'<h1>Dog Park</h1>'
  })
  addMarker({
    coords: {lng:-73.941132, lat:40.846136},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-73.921707, lat:40.871139},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-73.942595, lat:40.576822},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-73.980329, lat:40.726288},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-73.969716, lat:40.748807},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords:{lng:-73.97171, lat:40.782045},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-73.989585, lat:40.741548},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-73.949082, lat:40.81714},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-74.000861, lat:40.708807},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-73.92513, lat:40.856006},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-73.980117, lat:40.77054},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords:{lng:-74.007428, lat:40.74818},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-73.9857, lat:40.780321},
    content:'<h1>Dog Park</h1>',
  })
  addMarker({
    coords:{lng:-74.001556, lat:40.764025},
    content:'<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-74.001556, lat:40.764025},
    content: '<h1>Dog Park</h1>',
  })
  addMarker({
    coords: {lng:-73.970555, lat:40.801602},
    content: '<h1>Dog Park</h1>',
  })

}

window.initMap = initMap;


