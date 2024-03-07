// API
const apiKey = "ac8b444969034f947c6df2227b70984c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// INPUT AND BUTTON
const searchInput =  document.querySelector(".search input");
const searchBtn =  document.querySelector(".search button");


document.querySelector(".error").style.display = "none"


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    if (response.status == "404") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").style.transition = "0.2s";
        document.querySelector(".weather").style.display = "none";
        
        document.querySelector('.weather').style.opacity = 0;
        document.querySelector('.weather').style.visibility = 'hidden';
        
    }else{
        // ASSIGNATION DATA
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C"
        document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
        
        // WEATHER IMG
        const weatherIcon = document.querySelector(".weather-icon");
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src= "images/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src= "images/sun.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src= "images/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src= "images/mist.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src= "images/rainy.png"
        }
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        
        
        document.querySelector('.weather').style.opacity = 1;
        document.querySelector('.weather').style.visibility = 'visible';
    }
    
}

// EVENT BUTTON 
searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchInput.value);
})


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    
    // Aggiorna la proprietà backdrop-filter in base a window.scrollY
    navbar.style.backdropFilter = 'blur(' + (window.scrollY / 10) + 'px)'; // Puoi regolare il divisore per cambiare l'intensità dello sfocato
});




