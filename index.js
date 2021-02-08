
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


function pixelToVw(pixel) {

	var vw = 0;
	var hauteur = window.innerWidth;
	vw = (pixel / hauteur) * 100;
	return (vw) + "vw";
}


var posXDoigt = 0;
var posYDoigt = 0;
var posXDoigtAfter = 0;
var posYDoigtAfter = 0;
var degActuel = 0;
var divCible = document.getElementById("divTurn");

function rotateOntouchStart(event) {

	posXDoigt = event.touches[0].clientX;
	posYDoigt = event.touches[0].clientY;
	divCible.style.willChange = "transform";

}


function rotateOntouchMoveY(event) {

	// Recuperation de la position X et Y du doigt.
	posYDoigtAfter = event.touches[0].clientY;
	var decalageY = posYDoigtAfter - posYDoigt;
	if (decalageY > 100) {
		divCible.style.transition = "transform 1s ease ";
		divCible.style.transform = "rotate("+ (degActuel + 90) + "deg)";
		degActuel += 90;
		posYDoigt = posYDoigtAfter;

	}
}

///////////////////////////////////////////

var blanc = {

	nom : "bla",
	couleur : "white"

}
var rouge = {

	nom : "r",
	couleur : "red"

}
var bleu = {

	nom : "ble",
	couleur : "blue"

}
var orange = {

	nom : "o",
	couleur : "#E48F04"

}
var vert = {

	nom : "v",
	couleur : "#2ECB0E"

}
var jaune = {

	nom : "j",
	couleur : "#F7F922"

}

var colors = ["", "", "", "", "", ""];

colors[0] = blanc;
colors[1] = rouge;
colors[2] = bleu;
colors[3] = orange;
colors[4] = vert;
colors[5] = jaune;


var fHT = ["", "", "", "", "", "", "", "", ""];

var fAT = ["", "", "", "", "", "", "", "", ""];

var fDT = ["", "", "", "", "", "", "", "", ""];

var fPT = ["", "", "", "", "", "", "", "", ""];

var fGT = ["", "", "", "", "", "", "", "", ""];

var fBT = ["", "", "", "", "", "", "", "", ""];

var fH = ["bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla"];

var fA = ["r", "r", "r", "r", "r", "r", "r", "r", "r"];

var fD = ["j", "j", "o", "bla", "ble", "r", "r", "r", "v"];

var fP = ["ble", "j", "ble", "ble", "o", "v", "r", "o", "o"];

var fG = ["bla", "ble", "v", "r", "v", "r", "v", "bla", "ble"];

var fB = ["o", "v", "v", "o", "j", "bla", "j", "ble", "j"];


function changeValueArray(faceIndex, selectedColor) {

	if (faceIndex === "fH[0]"){

		fH[0] = selectedColor;

	}
	if (faceIndex === "fH[1]"){

		fH[1] = selectedColor;

	}
	if (faceIndex === "fH[2]"){

		fH[2] = selectedColor;

	}
	if (faceIndex === "fH[3]"){

		fH[3] = selectedColor;

	}
	if (faceIndex === "fH[4]"){

		fH[4] = selectedColor;

	}
	if (faceIndex === "fH[5]"){

		fH[5] = selectedColor;

	}
	if (faceIndex === "fH[6]"){

		fH[6] = selectedColor;

	}
	if (faceIndex === "fH[7]"){

		fH[7] = selectedColor;

	}
	if (faceIndex === "fH[8]"){

		fH[8] = selectedColor;

	}

	if (faceIndex === "fA[0]"){

	fA[0] = selectedColor;

	}
	if (faceIndex === "fA[1]"){

	fA[1] = selectedColor;

	}
	if (faceIndex === "fA[2]"){

	fA[2] = selectedColor;

	}
	if (faceIndex === "fA[3]"){

	fA[3] = selectedColor;

	}
	if (faceIndex === "fA[4]"){

	fA[4] = selectedColor;

	}
	if (faceIndex === "fA[5]"){

	fA[5] = selectedColor;

	}
	if (faceIndex === "fA[6]"){

	fA[6] = selectedColor;

	}
	if (faceIndex === "fA[7]"){

	fA[7] = selectedColor;

	}
	if (faceIndex === "fA[8]"){

	fA[8] = selectedColor;

	}

}

function color_switch(formId, faceNum, faceIndex) {

	function checkAndChangeColor() {

		for (var i = 0; i < colors.length ; i++) {

			if (selectedColor === colors[i].nom){

				var carre = document.getElementById(faceNum);
				carre.style.backgroundColor = colors[i].couleur;
				changeValueArray(faceIndex, selectedColor);
				console.log(fH, fA);

			}

		}

	}
	var selectElmt = document.getElementById(formId);
	var selectedColor = selectElmt.options[selectElmt.selectedIndex].value;
	checkAndChangeColor();




}
///////////////////////////////////////
var check = true;
var ready = true
var degY = -47;
var degX = 0;
function switchCube() {

  if (check && ready) {

    container.style.transition =  "transform 2s ease";
    container.style.transform =  "rotateY(" + degY + "deg) rotateX(" + (degX + 180) + "deg)";
    degX += 180;
    check = false;
    ready = false;
    setTimeout(() => {ready = true;}, 2000);

  } else if (ready){

    container.style.transform =  "rotateY(" + degY + "deg) rotateX(" + (degX + 180) + "deg)";
    ready = false;
    setTimeout(() => {

        container.style.transition =  "none";
        degX = 0;
        container.style.transform =  "rotateY(" + degY + "deg) rotateX(" + degX + "deg)";
        check = true;
        ready = true;

    }, 2000);

  }

}

function turnRightCube() {

	if (ready) {

		ready = false;
		container.style.transition =  "transform 2s ease";
		container.style.transform =  "rotateY(" + (degY + -90) + "deg) rotateX(" + degX + "deg)";
		degY += -90;
		setTimeout(() => {ready = true;}, 2000);



	}

}


//////////////////////////// Service Worker ///////////////////////////

if ("serviceWorker" in navigator) {
  // On essaye d'enregistrer le service
  // worker
  navigator.serviceWorker
  .register("service-worker.js")
    .then(registration => {
      // Le Service Worker a fini d'être
      // téléchargé.
      console.log("App: Téléchargement fini.");

      registration.addEventListener("updatefound", () => {
        // On récupère le Service
        // Worker en cours
        // d'installation
        const newWorker = registration.installing;
        // `registration` a aussi
        // les clés `active` et
        // `waiting` qui permettent
        // de récupérer les Service
        // Workers correspondant

        newWorker.addEventListener("statechange", () => {
          // Le service worker a
          // changé d'état
          console.log("App: Nouvel état :", newWorker.state);
        });
      });
    })
    .catch(err => {
      // Il y a eu un problème
      console.error("Y'a une couille dans le paté", err);
    });
}
