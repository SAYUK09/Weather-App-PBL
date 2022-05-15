// const url = "https://api.openweathermap.org/data/2.5/weather";
// const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb"

const asyncFetch = async () =>{
    const city = document.getElementById('city-input').value;
    const fullURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial` 

    const response = await fetch(fullURL);
    const data = await response.json();
    // data(json);
    return data 

}


function fetchURL () {

    asyncFetch()
    .then((data) => { info (data)})
}
function info (json){

    document.getElementById("city-name").innerText = json.name;
    document.getElementById("weather-type").innerText = json.weather[0].main;
    document.getElementById("temp").innerText =json.main.temp;
    document.getElementById("min-temp").innerText =json.main.temp_min;
    document.getElementById("max-temp").innerText = json.main.temp_max;

}


