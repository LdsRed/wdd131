const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    avgRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
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
})