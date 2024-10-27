var height = prompt("Height: ");

var stars = 1
var string = ""

var colors = ["yellow", "red", "green"]

function generate(){
    stars += 2;
    const div = document.createElement('div');
    document.body.appendChild(div);

    div.className = "line"
    div.innerHTML = string
    div.style.textAlign = "center"
    div.style.color = colors[Math.floor(Math.random()*colors.length)]
    div.style.fontSize = "50px"
}


for (var i = height; i > 0; i--) {

    if(i == height){
        string = " ".repeat(i) + " * ".repeat(stars) + " ".repeat(i)
        generate()

    }
    else{
        string = " ".repeat(i) +"*" + " | ".repeat(stars-2) +"*" + " ".repeat(i)
        generate()
    }
}

var lines = document.querySelectorAll(".line");
function changeColors() {
    lines.forEach(function(line) {
        line.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
}

setInterval(changeColors, 500);