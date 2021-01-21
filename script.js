


const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb"

function fetchURL (){
    const city = document.getElementById('city-input').value;
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const fullURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
    console.log(fullURL)
    console.log(city)

    return fetch(fullURL)
    .then((response)=>response.json())
    .then((json)=>{
        
        
        // console.log(json)
        console.log ("yeaahhhh")
    
        // document.getElementById("city-name").innerText = json.name;
        // document.getElementById("weather-type").innerText = json.weather[0].main;
       

        // return json
        data (json)
        }
    )
    
   
    
}



function data (json){
    // document.getElementById("city-name").innerText = json.name;
    console.log(json)
}

