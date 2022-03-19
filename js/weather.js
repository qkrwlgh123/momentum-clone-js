const API_KEY = 'b85691c1e15f13f382be8a8add6d3d24';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector('#geo span:first-child');
      const name = document.querySelector('.name');
      const weather = document.querySelector('#geo span:last-child');
      console.log(data);
      name.innerText = `in ${data.name}`;
      temp.innerText = `${Math.round(data.main.temp)}°C`;
      weather.innerText = `Today's weather is..${data.weather[0].main}!`;
    });
}
function onGeoError() {
  alert('Cant find you. NO weather for you.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
