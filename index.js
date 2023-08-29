const apiKey = "2fdb6a27cb899137fa29222893668770";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=delhi,india,&units=metric"


async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
}

async function set(){

    checkWeather();
}
