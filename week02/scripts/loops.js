//loop.js


myInfo = {
    name:"Jordan Larcher",
    photo:"imges/photo.jpg",
    favoriteFoods: ["Asado", "tartas de Jamon Y queso", "pollo al horno", "ensaladas",
    "asado al horno"],
    hobbies: ["Reading", "Playing games", "Exercise", "walk"],
    placesLived: [
        {
            place: "Resistencia, Chaco",
            length:"20 years"
        },
        {
            place:"Reconquista, Santa Fe",
            length: "1 year"
        },
        {
            place:"Arequipa, Peru",
            length: "2 years" 
        },
    ],

}

// Step 4: For each favorite food in the favoriteFoods property, c  reate an HTML <li> element and place its value in the <li> element
// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoriteFoods[0];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favoriteFoods[1];

// let favoriteFood3 = document.createElement("li");
// favoriteFood3.textContent = myInfo.favoriteFoods[2];

// let favoriteFood4 = document.createElement("li");
// favoriteFood4.textContent = myInfo.favoriteFoods[3];



// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// document.querySelector("#favorites-foods").appendChild(favoriteFood1);
// document.querySelector("#favorites-foods").appendChild(favoriteFood2);
// document.querySelector("#favorites-foods").appendChild(favoriteFood3);
// document.querySelector("#favorites-foods").appendChild(favoriteFood4);



/*
Activity 1 #
The code above will output the elements in an Array to the DOM. The provided solution above showed doing that one 
list element at a time, but this produces a lot of duplicated code and is tedious even for short lists. Loops would be a
 much better way to approach that problem. How can we use loops to make this more DRY?

Decide which type of loop would be best for this task.

What would be an appropriate loop to use? A basic while loop is useful for when we don't know how many times we need 
to loop. In this case we do: as many times as we have elements in the array. So a basic for loop is good for when we know 
how many loops we need to make. But if you remember back to the reading it mentioned that anytime we are looping over an array we
 should look at .forEach() or .map()

It is worthwhile to take a look at both options.

Write a function using a .forEach method to loop over an array and output it's contents in a <ul>

Write a function using a .map method to loop over an array and output it's contents in a <ul>

Test your functions.
*/


const foodsElement = document.querySelector('#favorites-foods');


function readFavoritesFoodsFromArray(favoritesFoodArray){
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = favoritesFoodArray;
    foodsElement.appendChild(favoriteFood);    
}

myInfo.favoriteFoods.forEach(readFavoritesFoodsFromArray);