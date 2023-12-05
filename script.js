let number = document.getElementById("zero")
let btnicrease = documet.getElementById("B1")
let btnDecreas = documet.getElementById("B2")
let btnIncreasten = document.getElementById("B3")
let btndecreasten  = document.getElementById("B5")

let count = 0

function countUP () {
    count = count +1;
    number.textContent= count;

}

function countdown () {
    count = count -1;
    number.textContent= count;

}
function increasbyTen () {
    count = count +10;
    number.textContent= count;

}
function decreasbyTen () {
    count = count -10;
    number.textContent= count;

}
function reset () {
    count = 0;
    number.textContent= count;

}
btnicrease.addEventListener("click",countUP)
btnDecreas.addEventListener("click",countdown)
btnIncreasten.addEventListener("click",increasbyTen)
btndecreasten.addEventListener("click",decreasbyTen)
count.addEventListener("click",reset)