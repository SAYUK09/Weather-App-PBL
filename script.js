// const url = "https://api.openweathermap.org/data/2.5/weather";
// const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb"

const cityInput = document.getElementById("city-input");
console.log(cityInput);
cityInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    fetchURL();
  }
});

const asyncFetch = async () => {
  const city = document.getElementById("city-input").value;
  const fullURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=metric`;

  const response = await fetch(fullURL);
  const data = await response.json();

  return data;
};

function fetchURL() {
  asyncFetch().then((data) => {
    info(data);
  });
}
function info(weatherData) {
  console.log(weatherData.weather[0].main, "www");

  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;

  updateBackground(weatherData.weather[0].main);
}

function updateBackground(weatherType) {
  if (weatherType === "Clouds") {
    removePreviousBackground();
    document.getElementById("wrapper").classList.add("clouds");
  } else if (weatherType === "Haze") {
    removePreviousBackground();
    document.getElementById("wrapper").classList.add("haze");
  } else if (weatherType === "Rain") {
    removePreviousBackground();
    document.getElementById("wrapper").classList.add("rain");
  } else if (weatherType === "Clear") {
    removePreviousBackground();
    document.getElementById("wrapper").classList.add("clear");
  }
}

function removePreviousBackground() {
  document.getElementById("wrapper").classList.remove("haze");
  document.getElementById("wrapper").classList.remove("clouds");
  document.getElementById("wrapper").classList.remove("rain");
  document.getElementById("wrapper").classList.remove("clear");
}

