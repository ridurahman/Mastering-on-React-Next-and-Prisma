navigator.geolocation.getCurrentPosition(function (position) {
  let altitude = position.coords.altitude;
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let speed = position.coords.speed;

  document.write("altitude: " + altitude + "<br>");
  document.write("altitude: " + latitude + "<br>");
  document.write("altitude: " + longitude + "<br>");
  document.write("altitude: " + speed + "<br>");
});
