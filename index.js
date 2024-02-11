const APIKEY = "8adc3205dd3c14706f7a98dbaf243f63";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search Button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response  = await fetch(APIURL + city + `&appid=${APIKEY}`);
    var data = await response.json();
    
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp )+ '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/Hr';

    if(data.weather[0].main == 'Clouds')
{
    weatherIcon.src = "images/clouds.png";
}else if (data.weather[0].main == 'Clear')
{
    weatherIcon.src = "images/clear.png";
}else if(data.weather[0].main == 'Rain'){
    weatherIcon.src = "images/rain.png";
}else if(data.weather[0].main == 'Drizzle'){
    weatherIcon.src = "images/drizzle.png";
}else {
    weatherIcon.src = "images/mist.png";
};

};



searchBtn.addEventListener('click' ,()=>{
    checkWeather(searchbox.value);
});

