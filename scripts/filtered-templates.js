
const hamButton = document.getElementById("hamButton");
const nav = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("change");
    nav.classList.toggle("show-links");
})

document.getElementById("currentyear").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = "Last modified: " + document.lastModified;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];


// Caching the DOM.
const templeContainer = document.getElementById("temples");

// Remove children from temple card container.
const reset = () => {
  templeContainer.innerHTML = "";
};

// Render all temple cards inside the HTML temple container.
const renderTemples = (templeArr) => {
  let templeCards = "";
  templeArr.forEach((temple) => {
    templeCards += `
    <section class="temple-card">
      <h2>${temple.templeName}</h2>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="300" height="188">
      <ul class="temple-info">
        <li><b>Location:</b> ${temple.location}</li>
        <li><b>Dedicated:</b> ${temple.dedicated}</li>
        <li><b>Size:</b> ${temple.area} sq feet</li>
      </ul>
    </section>
    `;
  });
  // Render in html.
  templeContainer.innerHTML = templeCards;
};

renderTemples(temples);

// Caching the DOM.
const navBar = document.getElementById("navigation");

navBar.addEventListener("click", (event) => {
  const target = event.target;
  event.preventDefault();
  reset();
  switch (target.id) {
    case "home":
      renderTemples(temples);
      break;
    case "old":
      const oldTemples = temples.filter(
          (temple) => Number(temple.dedicated.split(",")[0]) < 1900
      );
      renderTemples(oldTemples);
      break;
    case "new":
      const newTemples = temples.filter(
          (temple) => Number(temple.dedicated.split(",")[0]) > 2000
      );
      renderTemples(newTemples);
      break;
    case "large":
      const largeTemples = temples.filter((temple) => temple.area > 90000);
      renderTemples(largeTemples);
      break;
    case "small":
      const smallTemples = temples.filter((temple) => temple.area < 10000);
      renderTemples(smallTemples);
      break;
  }
});
