
const currentYearID = document.getElementById("currentYear");

const dateLastModifiedID = document.getElementById("lastModified");

currentYearID.innerText = new Date().getFullYear();
dateLastModifiedID.innerText = "Last Modification: " + document.lastModified;
