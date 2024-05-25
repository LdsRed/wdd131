document.getElementById("currentYear").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = "Last modified: " + document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avgRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    avgRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    avgRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    avgRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    avgRating: 5.0
  }
];



function generateProductOptions() {
  const selectElement = document.querySelector("#productNameOptions");
  products.forEach(product => {

    let newOption = document.createElement("option");
    newOption.value = product.id;
    newOption.textContent = product.name;
    selectElement.appendChild(newOption);
  })
}





document.addEventListener("DOMContentLoaded", function (){
  generateProductOptions();
});


const productName = document.getElementById('productNameOptions');
const rating = document.querySelector('input[name="stars"]:checked');
const installationDate = document.getElementById('installation-date');
const form = document.querySelector("#form");


form.addEventListener("submit", e => {
  e.preventDefault();
  validateUserInputs();
});


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateUserInputs = () => {
  const product = productName.value.trim();
  const install = installationDate.value.trim();
  const starsRating = rating.value.trim();


  if (product === 'select') {
      setError(productName, "Select a product")
  } else {
    setSuccess(productName);
  }

  if (!starsRating) {
    setError(rating, "Rating is required")
  } else {
    setSuccess(rating);
  }

  if (install === '') {
    setError(installationDate, "Date is required")
  } else {
    setSuccess(installationDate);
  }

};

