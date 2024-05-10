document.getElementById("currentyear").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = "Last modified: " + document.lastModified;



// Windchill factor and Static variables for WEATHER
// Author: Adson Mettler do Nascimento

// Static values for temperature and wind speed
var temperatureCelsiusValue = 9;
var temperatureCelsiusElement = document.getElementById("temperature-info");
temperatureCelsiusElement.textContent = temperatureCelsiusValue + "°C";
var windSpeedKmhValue = 50;
var windSpeedKmhElement = document.getElementById("wind-speed");
windSpeedKmhElement.textContent = windSpeedKmhValue + " km/h";


// Function to calculate windchill factor
function calculateWindchill(temperatureCelsius, windSpeedKmh) {
    return 13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeedKmh, 0.16);
}

// Static values for temperature and wind speed
var temperatureCelsius = 9;
var windSpeedKmh = 50;

// Calculate windchill factor
var windchillFactor = calculateWindchill(temperatureCelsius, windSpeedKmh);

var windchillElement = document.getElementById("windchill-factor");
windchillElement.textContent = windchillFactor.toFixed(1) + "°C";