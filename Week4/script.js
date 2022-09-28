const duck = document.getElementById("duck");
const hair_r = document.getElementById("hair_r");
const hair_l = document.getElementById("hair_l");
const blush_r = document.getElementById("blush_r");
const blush_l = document.getElementById("blush_l");
const bubble = document.getElementById("bubble")

duck.addEventListener("mouseenter", startWagging);
duck.addEventListener("mouseleave", stopWagging);
duck.addEventListener("click", changeColor);
bubble.addEventListener("click", changeText);


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

//change texts
function changeText(){
    var list = ["Bonjour","你好","Hola","こにちは"];
    let random = list[Math.floor(Math.random()*list.length)];
    console.log(random);
    bubble.innerHTML = ""+ random +"";
}