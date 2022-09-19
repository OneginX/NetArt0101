for (var i = 0; i <= 36; i++) {
    var colors = ['red', 'yellow', 'blue', 'white', 'gray'];
    var div = document.getElementsByClassName("div")[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}