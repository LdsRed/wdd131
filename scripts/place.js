document.getElementById("currentyear").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = "Last modified: " + document.lastModified;



const tempEl = document.getElementById("temperature");
const windchillEl = document.getElementById("windchill-factor");
const windSpeedEl = document.getElementById("wind-speed");

const temp = Number(tempEl.textContent);
const windSpeed = Number(windSpeedEl.textContent);

const calculateWindChill = (temp, windSpeed) => {
    const windchill =
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16) +
        13.12;
    return windchill;
};

if (temp <= 10 && windSpeed > 4.8) {
    const windchill = calculateWindChill(temp, windSpeed);
    windchillEl.innerHTML = `${windchill.toFixed(1)} &deg;C`;
} else {
    windchillEl.textContent = `N/A`;
}
