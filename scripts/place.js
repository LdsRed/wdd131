const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("windchill-factor");

const temperature = Number(temperatureElement.textContent);
const windSpeed = Number(windSpeedElement.textContent);


const calculateWindChill = (temp, wind) => {
    const windChill = 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16) + 13.12
    return windChill;
}

if(temperature <= 10 && windSpeed >4.8){
    const windChillFactor = calculateWindChill(temperature, windSpeed);
    windChillElement.innerHTML= `${windChillFactor.toFixed(1)} &deg;C`;
} else {
    windChillElement.textContent = `N/A`;
}





