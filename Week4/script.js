const duck = document.getElementById("duck");
const hair_r = document.getElementById("hair_r");
const hair_l = document.getElementById("hair_l");
const blush_r = document.getElementById("blush_r");
const blush_l = document.getElementById("blush_l");
var colors = ['red', 'green', 'blue', 'orange', 'yellow'];

duck.addEventListener("mouseenter", startWagging);
duck.addEventListener("mouseleave", stopWagging);
duck.addEventListener("click", changeColor);


//wagging hair when the mouse hovers
function startWagging(){
    duck.style.cursor = "pointer";
    hair_r.classList.add("animationr");
    hair_l.classList.add("animationl");
}

function stopWagging(){
    hair_r.classList.remove("animationr");
    hair_l.classList.remove("animationl");
}

//change blush color to random onclick
function changeColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    blush_r.style.background = "rgba(" + r + "," + g + "," + b + ", 0.313)";
    blush_l.style.background = "rgba(" + r + "," + g + "," + b + ", 0.313)";
}

