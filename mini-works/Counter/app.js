
// selecting buttons and values
const result = document.querySelector(".result");
const reset = document.querySelector(".zero");
const decrease = document.querySelector(".minus");
const increase = document.querySelector(".plus");
let count = result.innerText;

//button eventListeners and functionality
increase.addEventListener ("click", () => {
    count ++;
    result.innerHTML = count;
    if (count > 0) {
    result.style.color = ("green")
}
}
);
decrease.addEventListener ("click", () => {
    count --;
    result.innerHTML = count;
    
    if (count < 0) {
    result.style.color = ("red")
}
}
);
reset.addEventListener ("click", () => {
    count = 0;
    result.innerHTML = count;
    if (count === 0) {
    result.style.color = ("black")
}
}
);

