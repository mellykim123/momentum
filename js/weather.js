 const API_KEY = "d88a8d4df403acf962720f9f8b98b624";
function onGeoOk(position){
const lat = position.coords.latitude;
const lon = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
console.log(url);
fetch(url)
.then(response=>response.json()
.then(data=>{
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
}));
}
function onGeoError(){
    alert("Can't find the weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);