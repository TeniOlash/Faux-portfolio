const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btt = document.getElementById("btt");
const color = document.querySelector(".color");
const link = document.querySelector(".hx");
btt.addEventListener("click", function () {
 let hexValue = '#';
 for(let i = 0; i<6; i++) {
     hexValue += hex[getRandNum()];

 }
 color.textContent = hexValue;
 document.body.style.backgroundColor = hexValue;
} 
);

function getRandNum() {
    return Math.floor(Math.random()*hex.length);
}

link.style.backgroundColor = ('white');
