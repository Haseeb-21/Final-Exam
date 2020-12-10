var label = document.querySelector("label").style.display = 'none';
var btn = document.querySelector("button").style.display = 'none';
var input = document.querySelector("input").style.display = 'none';


var inputs = document.querySelector(".container");
    inputs.addEventListener("mouseover", hoverOver);

function hoverOver() {
    document.querySelector("label").style.display = 'inline';
    document.querySelector("button").style.display = 'inline';
    document.querySelector("input").style.display = 'inline';

}

