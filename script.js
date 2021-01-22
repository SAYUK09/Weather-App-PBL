// const url = "https://api.openweathermap.org/data/2.5/weather";
// const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb"

var givedata = function fetchFunc() {
    const city = document.getElementById('city-input').value;
    const fullURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`;

    return fetch(fullURL)
        .then(response => response.json())
        .then((json) => {
            return json;
        });

}

function getData (){
    givedata().then((json=>console.log(json)))
}



