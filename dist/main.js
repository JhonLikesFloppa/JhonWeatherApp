const {listen} = window.__TAURI__.event;
listen('tauri://update-status', function (res) {
  console.log('New Status: ', res)
})

const api = {
  key: "77ceefcf30b1e1b78feb291d43bf88ac",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;
  
  if (weather.weather[0].main == "Ash") {
    document.body.style.backgroundImage = "url('./wp/Ash.jpg')"
  }
  if (weather.weather[0].main == "Clear") {
    document.body.style.backgroundImage = "url('./wp/Clear.jpg')"
  }
  if (weather.weather[0].main == "Clouds") {
    document.body.style.backgroundImage = "url('./wp/Clouds.jpg')"
  }
  if (weather.weather[0].main == "Drizzle") {
    document.body.style.backgroundImage = "url('./wp/DrizzleRain.jpg')"
  }
  if (weather.weather[0].main == "Dust") {
    document.body.style.backgroundImage = "url('./wp/DustSand.jpg')"
  }
  if (weather.weather[0].main == "Fog") {
    document.body.style.backgroundImage = "url('./wp/Fog.jpg')"
  }
  if (weather.weather[0].main == "Haze") {
    document.body.style.backgroundImage = "url('./wp/Haze.jpg')"
  }
  if (weather.weather[0].main == "Mist") {
    document.body.style.backgroundImage = "url('./wp/Mist.jpg')"
  }
  if (weather.weather[0].main == "Rain") {
    document.body.style.backgroundImage = "url('./wp/DrizzleRain.jpg')"
  }
  if (weather.weather[0].main == "Sand") {
    document.body.style.backgroundImage = "url('./wp/DustSand.jpg')"
  }
  if (weather.weather[0].main == "Smoke") {
    document.body.style.backgroundImage = "url('./wp/Smoke.jpg')"
  }
  if (weather.weather[0].main == "Snow") {
    document.body.style.backgroundImage = "url('./wp/Snow.jpg')"
  }
  if (weather.weather[0].main == "Squall") {
    document.body.style.backgroundImage = "url('./wp/Squall.jpg')"
  }
  if (weather.weather[0].main == "Thunderstorm") {
    document.body.style.backgroundImage = "url('./wp/Thunderstorm.jpg')"
  }
  if (weather.weather[0].main == "Tornado") {
    document.body.style.backgroundImage = "url('./wp/Tornado.jpg')"
  }    
  
  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}