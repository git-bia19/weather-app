import {getAnimatedIcon} from './utils/utils.js';

let currentWeather;

const $currentIcon = document.querySelector(".current__icon");
const $currentSummary = document.querySelector(".current__summary");
const $tempNum = document.querySelector(".current__temp-num");
const $windSpeed = document.querySelector(".current__wind span");
const $humidity = document.querySelector(".current__humidity span");
const $precipation = document.querySelector(".current__precipation");

export const setCurrentWeather = newWeather => {
 currentWeather = newWeather;
 render();
 console.log(currentWeather)
}

const render = _ =>{
    $currentIcon.innerHTML = getAnimatedIcon()
    $currentSummary.textContent = currentWeather.summary;
    $windSpeed.textContent = Math.round(currentWeather.windSpeed)
    $humidity.textContent = Math.round(currentWeather);
    $precipation.textContent = Math.round(currentWeather.precipation)
}