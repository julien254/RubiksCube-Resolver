

///////////////////////// Déclarations et récuperations ////////////////////

//////////// Déclarations

// Stokage clé:valeu Couleurs=====>

var blanc = {

	nom : "bla",
	couleur : "white"

}
var rouge = {

	nom : "r",
	couleur : "#f00202"

}
var bleu = {

	nom : "ble",
	couleur : "blue"

}
var orange = {

	nom : "o",
	couleur : "#ff6200"

}
var vert = {

	nom : "v",
	couleur : "#0a9900"

}
var jaune = {

	nom : "j",
	couleur : "#F7F922"

}

// Tableau Couleurs =====>

var colors = ["", "", "", "", "", ""];

colors[0] = blanc;
colors[1] = rouge;
colors[2] = bleu;
colors[3] = orange;
colors[4] = vert;
colors[5] = jaune;

// Tableaux Temporaires Des faces du Cube ====>

var fHT = ["", "", "", "", "", "", "", "", ""];

var fAT = ["", "", "", "", "", "", "", "", ""];

var fDT = ["", "", "", "", "", "", "", "", ""];

var fPT = ["", "", "", "", "", "", "", "", ""];

var fGT = ["", "", "", "", "", "", "", "", ""];

var fBT = ["", "", "", "", "", "", "", "", ""];

// Tableaux Des faces du Cube ====>

var fH = ["bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla"];

var fA = ["r", "r", "r", "r", "r", "r", "r", "r", "r"];

var fD = ["ble", "ble", "ble", "ble", "ble", "ble", "ble", "ble", "ble"];

var fP = ["o", "o", "o", "o", "o", "o", "o", "o", "o"];

var fG = ["v", "v", "v", "v", "v", "v", "v", "v", "v"];

var fB = ["j", "j", "j", "j", "j", "j", "j", "j", "j"];

// Variables Animations button Switch, left et right =====>

var check = true;
var ready = true
var degY = -47;
var degX = 0;

/////////// Récupérations
var container = document.getElementById("containerAxeY");
var cube1 = document.getElementById("cube1");
var fC1 = [document.getElementById("cube1fA0"), fA[0], document.getElementById("cube1fH6"), fH[6], document.getElementById("cube1fG2"), fG[2]];
var cube2 = document.getElementById("cube2");
var fC2 = [document.getElementById("cube2fA1"), fA[1], document.getElementById("cube2fH7"), fH[7]];
var cube3 = document.getElementById("cube3");
var fC3 = [document.getElementById("cube3fA2"), fA[2], document.getElementById("cube3fH8"), fH[8], document.getElementById("cube3fD0"), fD[0]];
var cube4 = document.getElementById("cube4");
var fC4 = [document.getElementById("cube4fA3"), fA[3], document.getElementById("cube4fG5"), fG[5]];
var cube5 = document.getElementById("cube5");
var cube6 = document.getElementById("cube6");
var fC6 = [document.getElementById("cube6fA5"), fA[5], document.getElementById("cube6fD3"), fD[3]];
var cube7 = document.getElementById("cube7");
var fC7 = [document.getElementById("cube7fA6"), fA[6], document.getElementById("cube7fG8"), fG[8], document.getElementById("cube7fB0"), fB[0]];
var cube8 = document.getElementById("cube8");
var fC8 = [document.getElementById("cube8fA7"), fA[7], document.getElementById("cube8fB1"), fB[1]];
var cube9 = document.getElementById("cube9");
var fC9 = [document.getElementById("cube9fA8"), fA[8], document.getElementById("cube9fD6"), fD[6], document.getElementById("cube9fB2"), fB[2]];
var cube10 = document.getElementById("cube10");
var cube11 = document.getElementById("cube11");
var cube12 = document.getElementById("cube12");
var cube13 = document.getElementById("cube13");
var cube15 = document.getElementById("cube15");
var cube16 = document.getElementById("cube16");
var cube17 = document.getElementById("cube17");
var cube18 = document.getElementById("cube18");
var cube19 = document.getElementById("cube19");
var cube20 = document.getElementById("cube20");
var cube21 = document.getElementById("cube21");
var cube22 = document.getElementById("cube22");
var cube23 = document.getElementById("cube23");
var cube24 = document.getElementById("cube24");
var cube25 = document.getElementById("cube25");
var cube26 = document.getElementById("cube26");
var cube27 = document.getElementById("cube27");


////////////////////////////// Algo resolve cube ////////////////////////

/////////////////////////////// Functions Génerale

function conversionColor(color) {

	if (color === "r") {

		return "#f00202";
	}else if (color === "bla") {

		return "white";
	}else if (color === "ble") {

		return "blue";
	}else if (color === "o") {

		return "#ff6200";
	}else if (color === "v") {

		return "#0a9900";
	}else if (color === "j") {

		return "#F7F922";
	}

}

// Changement de couleurs et des valeurs dans les tableaux lors de la selection de l'utilisateur ====>

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

			}

		}

	}
	var selectElmt = document.getElementById(formId);
	var selectedColor = selectElmt.options[selectElmt.selectedIndex].value;
	checkAndChangeColor();




}

// fonction des boutons switch, left, right =====>

function switchCube() {

  if (check && ready) {

    container.style.transition =  "transform 1s ease";
    container.style.transform =  "rotateY(" + degY + "deg) rotateX(" + (degX + 180) + "deg)";
    degX += 180;
    check = false;
    ready = false;
    setTimeout(() => {ready = true;}, 1000);

  } else if (ready){

    container.style.transform =  "rotateY(" + degY + "deg) rotateX(" + (degX + 180) + "deg)";
    ready = false;
    setTimeout(() => {

        container.style.transition =  "none";
        degX = 0;
        container.style.transform =  "rotateY(" + degY + "deg) rotateX(" + degX + "deg)";
        check = true;
        ready = true;

    }, 1000);

  }

}

function turnLeftCube() {

	if (ready) {

		ready = false;
		container.style.transition =  "transform 1s ease";
		container.style.transform =  "rotateY(" + (degY + -90) + "deg) rotateX(" + degX + "deg)";
		degY += -90;
		setTimeout(() => {ready = true;}, 1000);

	}

}

function turnRightCube() {

	if (ready) {

		ready = false;
		container.style.transition =  "transform 1s ease";
		container.style.transform =  "rotateY(" + (degY + 90) + "deg) rotateX(" + degX + "deg)";
		degY += 90;
		setTimeout(() => {ready = true;}, 1000);

	}
}

// fonction Animations des faces du cube ====>

function animeFaceRotateAiguille(c1, fC1, c2, fC2, c3, fC3, c4, fC4, c5, c6, fC6, c7, fC7, c8, fC8, c9, fC9) {

	// creation de la div à animer et ajout des face concerner
	var divTurn = document.getElementById("divTurn");
	divTurn.style.willChange = "transform";
	divTurn.style.transition = "transform 2s ease"
	divTurn.appendChild(c1);
	divTurn.appendChild(c2);
	divTurn.appendChild(c3);
	divTurn.appendChild(c4);
	divTurn.appendChild(c5);
	divTurn.appendChild(c6);
	divTurn.appendChild(c7);
	divTurn.appendChild(c8);
	divTurn.appendChild(c9);

	// rotation de la divTurn
	divTurn.style.transform = "rotate(90deg)";

	// recuperation des la couleur des faces
	var couleurs = [fC7[1], fC7[3], fC7[5], fC4[1], fC4[3], fC1[1], fC1[5], fC1[3],
									fC8[1], fC8[3], fC2[1], fC2[3], fC9[1],fC9[5],fC9[3],
									fC6[1], fC6[3], fC3[1], fC3[3], fC3[5]];

	var face = [fC1[0],fC1[2],fC1[4],fC2[0],fC2[2],fC3[0],fC3[2],fC3[4],
									fC4[0],fC4[2],fC6[0],fC6[2],fC7[0],fC7[2],fC7[4],fC8[0],
									fC8[2],fC9[0],fC9[2],fC9[4]];
	// On attend la fin de l'animation et on change les couleurs
	setTimeout(() => {

		for (var i = 0; i < couleurs.length; i++) {
			face[i].style.backgroundColor = conversionColor(couleurs[i]);
		}
		divTurn.style.transform = "rotate(0deg)";
		divTurn.style.transition = "none";
	},2000);
}


////////////////////////// Turn FH



function tFHAig() {


	fHT[0] = fH[2];
	fHT[1] = fH[5];
	fHT[2] = fH[8];
	fHT[3] = fH[1];
	fHT[5] = fH[7];
	fHT[6] = fH[0];
	fHT[7] = fH[3];
	fHT[8] = fH[6];
	fAT[0] = fG[0];
	fAT[1] = fG[1];
	fAT[2] = fG[2];
	fDT[0] = fA[0];
	fDT[1] = fA[1];
	fDT[2] = fA[2];
	fPT[0] = fD[0];
	fPT[1] = fD[1];
	fPT[2] = fD[2];
	fGT[0] = fP[0];
	fGT[1] = fP[1];
	fGT[2] = fP[2];
	fH[0] = fHT[0];
	fH[1] = fHT[1];
	fH[2] = fHT[2];
	fH[3] = fHT[3];
	fH[5] = fHT[5];
	fH[6] = fHT[6];
	fH[7] = fHT[7];
	fH[8] = fHT[8];
	fA[0] = fAT[0];
	fA[1] = fAT[1];
	fA[2] = fAT[2];
	fD[0] = fDT[0];
	fD[1] = fDT[1];
	fD[2] = fDT[2];
	fP[0] = fPT[0];
	fP[1] = fPT[1];
	fP[2] = fPT[2];
	fG[0] = fGT[0];
	fG[1] = fGT[1];
	fG[2] = fGT[2];

}

function tFHInv() {

	fHT[0] = fH[6];
	fHT[1] = fH[3];
	fHT[2] = fH[0];
	fHT[3] = fH[7];
	fHT[5] = fH[1];
	fHT[6] = fH[8];
	fHT[7] = fH[5];
	fHT[8] = fH[2];
	fAT[0] = fD[0];
	fAT[1] = fD[1];
	fAT[2] = fD[2];
	fDT[0] = fP[0];
	fDT[1] = fP[1];
	fDT[2] = fP[2];
	fPT[0] = fG[0];
	fPT[1] = fG[1];
	fPT[2] = fG[2];
	fGT[0] = fA[0];
	fGT[1] = fA[1];
	fGT[2] = fA[2];
	fH[0] = fHT[0];
	fH[1] = fHT[1];
	fH[2] = fHT[2];
	fH[3] = fHT[3];
	fH[5] = fHT[5];
	fH[6] = fHT[6];
	fH[7] = fHT[7];
	fH[8] = fHT[8];
	fA[0] = fAT[0];
	fA[1] = fAT[1];
	fA[2] = fAT[2];
	fD[0] = fDT[0];
	fD[1] = fDT[1];
	fD[2] = fDT[2];
	fP[0] = fPT[0];
	fP[1] = fPT[1];
	fP[2] = fPT[2];
	fG[0] = fGT[0];
	fG[1] = fGT[1];
	fG[2] = fGT[2];


}

///////////////////////// Turn FA

function tFAAig() {

	fAT[0] = fA[2];
	fAT[1] = fA[5];
	fAT[2] = fA[8];
	fAT[3] = fA[1];
	fAT[5] = fA[7];
	fAT[6] = fA[0];
	fAT[7] = fA[3];
	fAT[8] = fA[6];
	fDT[0] = fB[2];
	fDT[3] = fB[1];
	fDT[6] = fB[0];
	fHT[6] = fD[0];
	fHT[7] = fD[3];
	fHT[8] = fD[6];
	fGT[2] = fH[8];
	fGT[5] = fH[7];
	fGT[8] = fH[6];
	fBT[0] = fG[2];
	fBT[1] = fG[5];
	fBT[2] = fG[8];
	fA[0] = fAT[0];
	fA[1] = fAT[1];
	fA[2] = fAT[2];
	fA[3] = fAT[3];
	fA[5] = fAT[5];
	fA[6] = fAT[6];
	fA[7] = fAT[7];
	fA[8] = fAT[8];
	fD[0] = fDT[0];
	fD[3] = fDT[3];
	fD[6] = fDT[6];
	fH[6] = fHT[6];
	fH[7] = fHT[7];
	fH[8] = fHT[8];
	fG[2] = fGT[2];
	fG[5] = fGT[5];
	fG[8] = fGT[8];
	fB[0] = fBT[0];
	fB[1] = fBT[1];
	fB[2] = fBT[2];

}

function tFAInv() {

	fAT[0] = fA[6];
	fAT[1] = fA[3];
	fAT[2] = fA[0];
	fAT[3] = fA[7];
	fAT[5] = fA[1];
	fAT[6] = fA[8];
	fAT[7] = fA[5];
	fAT[8] = fA[2];
	fDT[0] = fH[6];
	fDT[3] = fH[7];
	fDT[6] = fH[8];
	fHT[6] = fG[8];
	fHT[7] = fG[5];
	fHT[8] = fG[2];
	fGT[2] = fB[0];
	fGT[5] = fB[1];
	fGT[8] = fB[2];
	fBT[0] = fD[6];
	fBT[1] = fD[3];
	fBT[2] = fD[0];
	fA[0] = fAT[0];
	fA[1] = fAT[1];
	fA[2] = fAT[2];
	fA[3] = fAT[3];
	fA[5] = fAT[5];
	fA[6] = fAT[6];
	fA[7] = fAT[7];
	fA[8] = fAT[8];
	fD[0] = fDT[0];
	fD[3] = fDT[3];
	fD[6] = fDT[6];
	fH[6] = fHT[6];
	fH[7] = fHT[7];
	fH[8] = fHT[8];
	fG[2] = fGT[2];
	fG[5] = fGT[5];
	fG[8] = fGT[8];
	fB[0] = fBT[0];
	fB[1] = fBT[1];
	fB[2] = fBT[2];

}

///////////////////////////// Turn FD

function tFDAig() {

	fDT[0] = fD[2];
	fDT[1] = fD[5];
	fDT[2] = fD[8];
	fDT[3] = fD[1];
	fDT[5] = fD[7];
	fDT[6] = fD[0];
	fDT[7] = fD[3];
	fDT[8] = fD[6];
	fPT[0] = fB[8];
	fPT[3] = fB[5];
	fPT[6] = fB[2];
	fHT[2] = fP[6];
	fHT[5] = fP[3];
	fHT[8] = fP[0];
	fAT[2] = fH[2];
	fAT[5] = fH[5];
	fAT[8] = fH[8];
	fBT[2] = fA[2];
	fBT[5] = fA[5];
	fBT[8] = fA[8];
	fD[0] = fDT[0];
	fD[1] = fDT[1];
	fD[2] = fDT[2];
	fD[3] = fDT[3];
	fD[5] = fDT[5];
	fD[6] = fDT[6];
	fD[7] = fDT[7];
	fD[8] = fDT[8];
	fP[0] = fPT[0];
	fP[3] = fPT[3];
	fP[6] = fPT[6];
	fH[2] = fHT[2];
	fH[5] = fHT[5];
	fH[8] = fHT[8];
	fA[2] = fAT[2];
	fA[5] = fAT[5];
	fA[8] = fAT[8];
	fB[2] = fBT[2];
	fB[5] = fBT[5];
	fB[8] = fBT[8];

}

function tFDInv() {

	fDT[0] = fD[6];
	fDT[1] = fD[3];
	fDT[2] = fD[0];
	fDT[3] = fD[7];
	fDT[5] = fD[1];
	fDT[6] = fD[8];
	fDT[7] = fD[5];
	fDT[8] = fD[2];
	fPT[0] = fH[8];
	fPT[3] = fH[5];
	fPT[6] = fH[2];
	fHT[2] = fA[2];
	fHT[5] = fA[5];
	fHT[8] = fA[8];
	fAT[2] = fB[2];
	fAT[5] = fB[5];
	fAT[8] = fB[8];
	fBT[2] = fP[6];
	fBT[5] = fP[3];
	fBT[8] = fP[0];
	fD[0] = fDT[0];
	fD[1] = fDT[1];
	fD[2] = fDT[2];
	fD[3] = fDT[3];
	fD[5] = fDT[5];
	fD[6] = fDT[6];
	fD[7] = fDT[7];
	fD[8] = fDT[8];
	fP[0] = fPT[0];
	fP[3] = fPT[3];
	fP[6] = fPT[6];
	fH[2] = fHT[2];
	fH[5] = fHT[5];
	fH[8] = fHT[8];
	fA[2] = fAT[2];
	fA[5] = fAT[5];
	fA[8] = fAT[8];
	fB[2] = fBT[2];
	fB[5] = fBT[5];
	fB[8] = fBT[8];

}

////////////////////////// Turn FP

function tFPInv() {

	fPT[0] = fP[6];
	fPT[1] = fP[3];
	fPT[2] = fP[0];
	fPT[3] = fP[7];
	fPT[5] = fP[1];
	fPT[6] = fP[8];
	fPT[7] = fP[5];
	fPT[8] = fP[2];
	fGT[0] = fB[6];
	fGT[3] = fB[7];
	fGT[6] = fB[8];
	fHT[0] = fG[6];
	fHT[1] = fG[3];
	fHT[2] = fG[0];
	fDT[2] = fH[0];
	fDT[5] = fH[1];
	fDT[8] = fH[2];
	fBT[6] = fD[8];
	fBT[7] = fD[5];
	fBT[8] = fD[2];
	fP[0] = fPT[0];
	fP[1] = fPT[1];
	fP[2] = fPT[2];
	fP[3] = fPT[3];
	fP[5] = fPT[5];
	fP[6] = fPT[6];
	fP[7] = fPT[7];
	fP[8] = fPT[0];
	fG[0] = fGT[0];
	fG[3] = fGT[3];
	fG[6] = fGT[6];
	fH[0] = fHT[0];
	fH[1] = fHT[1];
	fH[2] = fHT[2];
	fD[2] = fDT[2];
	fD[5] = fDT[5];
	fD[8] = fDT[8];
	fB[6] = fBT[6];
	fB[7] = fBT[7];
	fB[8] = fBT[8];

}

function tFPAig() {

	fPT[0] = fP[2];
	fPT[1] = fP[5];
	fPT[2] = fP[8];
	fPT[3] = fP[1];
	fPT[5] = fP[7];
	fPT[6] = fP[0];
	fPT[7] = fP[3];
	fPT[8] = fP[6];
	fGT[0] = fH[2];
	fGT[3] = fH[1];
	fGT[6] = fH[0];
	fHT[0] = fD[2];
	fHT[1] = fD[5];
	fHT[2] = fD[8];
	fDT[2] = fB[8];
	fDT[5] = fB[7];
	fDT[8] = fB[6];
	fBT[7] = fG[0];
	fBT[8] = fG[3];
	fBT[9] = fG[6];
	fP[0] = fPT[0];
	fP[1] = fPT[5];
	fP[2] = fPT[8];
	fP[3] = fPT[3];
	fP[5] = fPT[5];
	fP[6] = fPT[6];
	fP[7] = fPT[7];
	fP[8] = fPT[8];
	fG[0] = fGT[0];
	fG[3] = fGT[3];
	fG[6] = fGT[6];
	fH[0] = fHT[0];
	fH[1] = fHT[1];
	fH[2] = fHT[2];
	fD[2] = fDT[2];
	fD[5] = fDT[5];
	fD[8] = fDT[8];
	fB[6] = fBT[6];
	fB[7] = fBT[7];
	fB[8] = fBT[8];

}

////////////////////// Turn FG

function tFGInv() {

	fGT[0] = fG[6];
	fGT[1] = fG[3];
	fGT[2] = fG[0];
	fGT[3] = fG[7];
	fGT[5] = fG[1];
	fGT[6] = fG[8];
	fGT[7] = fG[5];
	fGT[8] = fG[2];
	fAT[0] = fB[0];
	fAT[3] = fB[3];
	fAT[6] = fB[6];
	fHT[0] = fA[0];
	fHT[3] = fA[3];
	fHT[6] = fA[6];
	fPT[2] = fH[6];
	fPT[5] = fH[3];
	fPT[8] = fH[0];
	fBT[0] = fP[8];
	fBT[3] = fP[5];
	fBT[6] = fP[2];
	fG[0] = fGT[0];
	fG[1] = fGT[1];
	fG[2] = fGT[2];
	fG[3] = fGT[3];
	fG[5] = fGT[5];
	fG[6] = fGT[6];
	fG[7] = fGT[7];
	fG[8] = fGT[8];
	fA[0] = fAT[0];
	fA[3] = fAT[3];
	fA[6] = fAT[6];
	fH[0] = fHT[0];
	fH[3] = fHT[3];
	fH[6] = fHT[6];
	fP[2] = fPT[2];
	fP[5] = fPT[5];
	fP[8] = fPT[8];
	fB[0] = fBT[0];
	fB[3] = fBT[3];
	fB[6] = fBT[6];

}

function tFGAig() {

	fGT[0] = fG[2];
	fGT[1] = fG[5];
	fGT[2] = fG[8];
	fGT[3] = fG[1];
	fGT[5] = fG[7];
	fGT[6] = fG[0];
	fGT[7] = fG[3];
	fGT[8] = fG[6];
	fAT[0] = fH[0];
	fAT[3] = fH[3];
	fAT[6] = fH[6];
	fHT[0] = fP[8];
	fHT[3] = fP[5];
	fHT[6] = fP[2];
	fPT[2] = fB[6];
	fPT[5] = fB[3];
	fPT[8] = fB[0];
	fBT[0] = fA[0];
	fBT[3] = fA[3];
	fBT[6] = fA[6];
	fG[0] = fGT[0];
	fG[1] = fGT[1];
	fG[2] = fGT[2];
	fG[3] = fGT[3];
	fG[5] = fGT[5];
	fG[6] = fGT[6];
	fG[7] = fGT[7];
	fG[8] = fGT[8];
	fA[0] = fAT[0];
	fA[3] = fAT[3];
	fA[6] = fAT[6];
	fH[0] = fHT[0];
	fH[3] = fHT[3];
	fH[6] = fHT[6];
	fP[2] = fPT[2];
	fP[5] = fPT[5];
	fP[8] = fPT[8];
	fB[0] = fBT[0];
	fB[3] = fBT[3];
	fB[6] = fBT[6];

}

/////////////////////// Turn FB

function tFBAig() {

	fBT[0] = fB[2];
	fBT[1] = fB[5];
	fBT[2] = fB[8];
	fBT[3] = fB[1];
	fBT[5] = fB[7];
	fBT[6] = fB[0];
	fBT[7] = fB[3];
	fBT[8] = fB[6];
	fAT[6] = fG[6];
	fAT[7] = fG[7];
	fAT[8] = fG[8];
	fDT[6] = fA[6];
	fDT[7] = fA[7];
	fDT[8] = fA[7];
	fPT[6] = fD[6];
	fPT[7] = fD[7];
	fPT[8] = fD[8];
	fGT[6] = fP[6];
	fGT[7] = fP[7];
	fGT[8] = fP[8];
	fB[0] = fBT[0];
	fB[1] = fBT[1];
	fB[2] = fBT[2];
	fB[3] = fBT[3];
	fB[5] = fBT[5];
	fB[6] = fBT[6];
	fB[7] = fBT[7];
	fB[8] = fBT[8];
	fA[6] = fAT[6];
	fA[7] = fAT[7];
	fA[8] = fAT[8];
	fD[6] = fDT[6];
	fD[7] = fDT[7];
	fD[8] = fDT[8];
	fP[6] = fPT[6];
	fP[7] = fPT[7];
	fP[8] = fPT[8];
	fG[6] = fGT[6];
	fG[7] = fGT[7];
	fG[8] = fGT[8];

}

function tFBInv() {

	fBT[0] = fB[6];
	fBT[1] = fB[3];
	fBT[2] = fB[0];
	fBT[3] = fB[7];
	fBT[5] = fB[1];
	fBT[6] = fB[8];
	fBT[7] = fB[5];
	fBT[8] = fB[2];
	fAT[6] = fD[6];
	fAT[7] = fD[7];
	fAT[8] = fD[8];
	fDT[6] = fP[6];
	fDT[7] = fP[7];
	fDT[8] = fP[8];
	fPT[6] = fG[6];
	fPT[7] = fG[7];
	fPT[8] = fG[8];
	fGT[6] = fA[6];
	fGT[7] = fA[7];
	fGT[8] = fA[8];

	fB[0] = fBT[0];
	fB[1] = fBT[1];
	fB[2] = fBT[2];
	fB[3] = fBT[3];
	fB[5] = fBT[5];
	fB[6] = fBT[6];
	fB[7] = fBT[7];
	fB[8] = fBT[8];
	fA[6] = fAT[6];
	fA[7] = fAT[7];
	fA[8] = fAT[8];
	fD[6] = fDT[6];
	fD[7] = fDT[7];
	fD[8] = fDT[8];
	fP[6] = fPT[6];
	fP[7] = fPT[7];
	fP[8] = fPT[8];
	fG[6] = fGT[6];
	fG[7] = fGT[7];
	fG[8] = fGT[8];
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





//var posXDoigt = 0;
//var posYDoigt = 0;
//var posXDoigtAfter = 0;
//var posYDoigtAfter = 0;
//var degActuel = 0;
//var divCible = document.getElementById("divTurn");

//function rotateOntouchStart(event) {

//	posXDoigt = event.touches[0].clientX;
//	posYDoigt = event.touches[0].clientY;
//	divCible.style.willChange = "transform";

//}


//function rotateOntouchMoveY(event) {

	// Recuperation de la position X et Y du doigt.
//	posYDoigtAfter = event.touches[0].clientY;
//	var decalageY = posYDoigtAfter - posYDoigt;
//	if (decalageY > 100) {
//		divCible.style.transition = "transform 1s ease ";
//		divCible.style.transform = "rotate("+ (degActuel + 90) + "deg)";
//		degActuel += 90;
//		posYDoigt = posYDoigtAfter;

//	}
//}
