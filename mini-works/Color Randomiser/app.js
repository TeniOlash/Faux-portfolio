// Script for simple color randomizer
const colors = ["red", "blue", "pink", "green", "yellow", "aqua", "maroon", "orange", "purple", "violet", "gold", "grey", "crimson", "cyan", "firebrick", "salmon", "darkred", "silver", "snow", "sienna", "brown", "steelblue"];
// importing html items
const btt = document.getElementById("btt");
const color = document.querySelector(".color");
const link = document.querySelector(".simp")

// declaring anonymous function for button and accessing the simple colors array

btt.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.innerHTML = ("Looks like " + color.textContent + "...");

}
);

function getRandomNumber () {
   return Math.floor(Math.random() * colors.length);
}

link.style.backgroundColor = ('white');
