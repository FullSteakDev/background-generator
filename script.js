var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


body.style.background = "linear-gradient(to right, " 
                            + color1.value 
                            + ", " 
                            + color2.value 
                            + ")";
css.textContent = body.style.background + ";";


function setGradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function numberGenerator(){
    var numberPlace1 = document.getElementById("1");
    var numberPlace2 = document.getElementById("2");
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    numberPlace1.append(num1);
    numberPlace2.append(num2);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", numberGenerator);
