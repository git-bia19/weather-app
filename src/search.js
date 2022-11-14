import { setCurrentWeather } from "./current"

let address = "Chicago, IL"
const $searchForm = document.querySelector(".search__form")
const $searchInput = document.querySelector(".search__input")
const $searchCity = document.querySelector(".search__city")
const $searchWrapper = document.querySelector(".spinner-wrapper")
const GEOCODE_key = "AIzaSyBkdw_buwgeFvPo5Vtq7Zo0clPz9dj7HKI"

export const initializeSearch = _ =>{
 bindSearchEvents();
 updateWeather(address);
}

const bindSearchEvents = ()=>{
    $searchForm.addEventListener("submit", e => {
        e.preventDefault();
        $searchInput.classList.toggle("serach__input--open");
        $searchInput.focus();
        if ($searchInput.value == "") return;
        address = $searchInput.value;
        $searchInput.value = "";
        render();
    })
}
const updateWeather = async query => {
    const {lat,lng} = await getLatLng(address);
    const weatherData = await getWeatherData(lat,lng);

    const weatherCurent = weatherData.currently;
    setCurrentWeather(weatherCurent);
    
}
const getWeatherData = async (lat,lng) => {
    const reqLink = `${CORS}/https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m`;
    const fetchData = await fetch(reqLink);
    const parsed = await fetchData.json()
    console.log(reqLink)
}


const getLatLng = async query => {
    const reqLink = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GEOCODE_key}`
    const fetchData = await fetch(reqLink);
    const parsed = await fetchData.json();
    const latLng = {
        lat: parsed.results[0].geometry.location.lat,
        lng: parsed.results[0].geometry.location.lng
    }
  return latLng
}
const render = _ => {
    $searchCity.innerHTML = address;
}