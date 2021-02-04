
var container = document.getElementById("containerAxeY");
container.insertAdjacentHTML("afterBegin", "<div id='divTurn'> </div>");
var divTurn = document.getElementById("divTurn");
var cube1 = document.getElementById("cube1");
var cube2 = document.getElementById("cube2");
var cube3 = document.getElementById("cube3");
var cube4 = document.getElementById("cube4");
var cube5 = document.getElementById("cube5");
var cube6 = document.getElementById("cube6");
var cube7 = document.getElementById("cube7");
var cube8 = document.getElementById("cube8");
var cube9 = document.getElementById("cube9");
divTurn.appendChild(cube1);
divTurn.appendChild(cube2);
divTurn.appendChild(cube3);
divTurn.appendChild(cube4);
divTurn.appendChild(cube5);
divTurn.appendChild(cube6);
divTurn.appendChild(cube7);
divTurn.appendChild(cube8);
divTurn.appendChild(cube9);

function switchCube() {

  container.style.transform =  "rotateY(-47deg) rotateX(180deg)"

}
