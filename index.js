
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



// Tableaux Des faces du Cube ====>

var fH = ["bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla"];

var fA = ["r", "r", "r", "r", "r", "r", "r", "r", "r"];

var fD = ["ble", "ble", "ble", "ble", "ble", "ble", "ble", "ble", "ble"];

var fP = ["o", "o", "o", "o", "o", "o", "o", "o", "o"];

var fG = ["v", "v", "v", "v", "v", "v", "v", "v", "v"];

var fB = ["j", "j", "j", "j", "j", "j", "j", "j", "j"];

transformInObjet(fH,"H", "bla","fH");
transformInObjet(fA,"A", "r","fA");
transformInObjet(fD,"D", "ble","fD");
transformInObjet(fP,"P", "o","fP");
transformInObjet(fG,"G", "v","fG");
transformInObjet(fB,"B", "j","fB");


// Variables Animations button Switch, left et right =====>

var check = true;
var ready = true
var degY = -47;
var degX = 0;

// Variables de la fonction principale d'animation. ======>

var isReady = true;
var allIsReady = true;
var ms = 100;
var vitesse = 6;

/////////// Récupérations
var infoVitesse = document.getElementById("p1");
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
var fC10 = [document.getElementById("cube10fH3"), fH[3], document.getElementById("cube10fG1"), fG[1]];
var cube11 = document.getElementById("cube11");
var cube12 = document.getElementById("cube12");
var fC12 = [document.getElementById("cube12fH5"), fH[5], document.getElementById("cube12fD1"), fD[1]];
var cube13 = document.getElementById("cube13");
var cube15 = document.getElementById("cube15");
var cube16 = document.getElementById("cube16");
var fC16 = [document.getElementById("cube16fG7"), fG[7], document.getElementById("cube16fB3"), fB[3]];
var cube17 = document.getElementById("cube17");
var cube18 = document.getElementById("cube18");
var fC18 = [document.getElementById("cube18fD7"), fD[7], document.getElementById("cube18fB5"), fB[5]];
var cube19 = document.getElementById("cube19");
var fC19 = [document.getElementById("cube19fH0"), fH[0], document.getElementById("cube19fG0"), fG[0], document.getElementById("cube19fP2"), fP[2]];
var cube20 = document.getElementById("cube20");
var fC20 = [document.getElementById("cube20fH1"), fH[1], document.getElementById("cube20fP1"), fP[1]];
var cube21 = document.getElementById("cube21");
var fC21 = [document.getElementById("cube21fH2"), fH[2], document.getElementById("cube21fD2"), fD[2], document.getElementById("cube21fP0"), fP[0]];
var cube22 = document.getElementById("cube22");
var fC22 = [document.getElementById("cube22fG3"), fG[3], document.getElementById("cube22fP5"), fP[5]];
var cube23 = document.getElementById("cube23");
var cube24 = document.getElementById("cube24");
var fC24 = [document.getElementById("cube24fD5"), fD[5], document.getElementById("cube24fP3"), fP[3]];
var cube25 = document.getElementById("cube25");
var fC25 = [document.getElementById("cube25fG6"), fG[6], document.getElementById("cube25fP8"), fP[8], document.getElementById("cube25fB6"), fB[6]];
var cube26 = document.getElementById("cube26");
var fC26 = [document.getElementById("cube26fP7"), fP[7], document.getElementById("cube26fB7"), fB[7]];
var cube27 = document.getElementById("cube27");
var fC27 = [document.getElementById("cube27fD8"), fD[8], document.getElementById("cube27fP6"), fP[6], document.getElementById("cube27fB8"), fB[8]];



////////////////////////////// Algo resolve cube ////////////////////////

/////////////////////////////// Functions Génerale

function nombreAleatoire(min, max){

	return Math.floor(Math.random() * (max - min + 1)) + min;

}

function Melanger(nombre) {

	var tab = [];
	var numAleatoire = 0;
	for ( w = 0; w < nombre; w++) {

		numAleatoire = nombreAleatoire(0, 11);
		if ( numAleatoire === 0) {
			
			tab.push(tfaaig);

		}else if(numAleatoire === 1) {
			
			tab.push(tfainv);
		}else if(numAleatoire === 2) {
			
			tab.push(tfhaig);
		}else if(numAleatoire === 3) {
			
			tab.push(tfhinv);
		}else if(numAleatoire === 4) {
			
			tab.push(tfdaig);
		}else if(numAleatoire === 5) {
			
			tab.push(tfdinv);
		}else if(numAleatoire === 6) {
			
			tab.push(tfpaig);
		}else if(numAleatoire === 7) {
			
			tab.push(tfpinv);
		}else if(numAleatoire === 8) {
			
			tab.push(tfgaig);
		}else if(numAleatoire === 9) {
			
			tab.push(tfginv);
		}else if(numAleatoire === 10) {
			
			tab.push(tfbaig);
		}else if(numAleatoire === 11) {
			
			tab.push(tfbinv);
		}

	}
	lunchAnimation(tab.length, tab);
}


function deleteUsless(tab) {
	
	var youCan = true;
	var action = [tfhaig, tfhinv, tfaaig, tfainv, tfdaig, tfdinv, tfpaig, tfpinv, tfgaig, tfginv, tfbaig, tfbinv];
	var contraire = [tfhinv, tfhaig, tfainv, tfaaig, tfdinv, tfdaig, tfpinv, tfpaig, tfginv, tfgaig, tfbinv, tfbaig];
	for ( i = 0; i < tab.length; i++) {
		var youCan = true;
		for ( j = 0; j < action.length; j++) {
		
			if (tab[i] === action[j]){
				
				if (tab[i+1] === contraire[j] && i + 1  < tab.length){

					for ( k = 0; k < action.length; k++){

						if (tab[i-1] === action[k] && (i - 1) >= 0){

							if (tab[i+2] === contraire[k] && (i + 2) < tab.length){

								for ( l = 0; l < action.length; l++){

									if (tab[i-2] === action[l] && (i - 2) >= 0){

										if (tab[i+3] === contraire[l] && (i + 3) < tab.length){

											for ( m = 0; m < action.length; m++){

												if (tab[i-3] === action[m] && (i - 3) >= 0){

													if (tab[i+4] === contraire[m] && (i + 4) < tab.length){
														
														for ( n = 0; n < action.length; n++){

															if (tab[i-4] === action[n] && (i - 4) >= 0){

																if (tab[i+5] === contraire[n] && (i + 5) < tab.length){
																	if (youCan){
																		tab.splice((i - 4), 10);
																		i--;
																		youCan = false;
																		
																	}
																	break;
																	
																}else{
																	
																	break;
																	

																}
															}
														}
														if (youCan){
															tab.splice((i - 3), 8);
															i--;
															youCan = false;
															
														}
														break;
														
														
													}else {
													
														
														break;

								
													}
												}
											}
											if (youCan){
												tab.splice((i - 2), 6);
												i--;
												youCan = false;
												
											}
											break;
											
														
										}else {
													
											
											break;
											
										}
									}
								}
								if (youCan){
									tab.splice((i - 1), 4);
									i--;
									youCan = false;
									
								}
								break;
								
														
							}else {
													
								
								break;
								
							}
						}
					}
					if (youCan){
						tab.splice((i), 2);
						i--;
						youCan = false;
					
					}
					break;
					
				}

			}
		}
	}
}




function sleep(milliseconds) {
  const date = Date.now();
  var currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function transformInObjet (face, lettre, couleur, faceIndex) {

	for (var i = 0; i < face.length; i++) {
		face[i] = new Object();
		face[i].index = "f" + lettre +"["+ i + "]";
		face[i].face = faceIndex;
		face[i].num = i;
		face[i].color = couleur;
	}
}

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

function returnFcInOrder(fC1b,fC2b,fC3b,fC4b,fC6b,fC7b,fC8b,fC9b,order1,order2,order3,order4,order5,order6) {

		var tableau = [fC1b,fC2b,fC3b,fC4b,fC6b,fC7b,fC8b,fC9b];
		var ordre = [order1, order2, order3, order4, order5, order6];
		for (var i = 0; i < tableau.length; i++) {
			var bonneOrdre = [];
			var fCs = tableau[i];
			for (var j = 0; j < ordre.length; j++) {
				for (var k = 1; k < fCs.length; k+=2) {
					if (fCs[k].face === ordre[j]) {
						bonneOrdre.push(fCs[k-1]);
						bonneOrdre.push(fCs[k]);
					}
				}
			}
			for (var l = 0; l < bonneOrdre.length; l++) {
				fCs[l] = bonneOrdre[l];
			}
		}

}

// Changement de couleurs et des valeurs dans les tableaux lors de la selection de l'utilisateur ====>

function changeColor(id ) {

	if (pinceauActif){
	}
}

function changeValueArray(faceIndex, selectedColor, face, fC, fCT) {
	
	for (var i = 0; i < face.length; i++) {
		if (face[i].index === faceIndex) {
				
			fC.color = selectedColor;
			fCT.color = selectedColor;
			
			break;

		}
	}
}

function color_switch(formId, faceNum, faceIndex, face, fC, fCT) {

	function checkAndChangeColor() {

		for (var i = 0; i < colors.length ; i++) {

			if (selectedColor === colors[i].nom){

				var carre = document.getElementById(faceNum);
				carre.style.backgroundColor = colors[i].couleur;
				changeValueArray(faceIndex, selectedColor, face, fC, fCT);
				break

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


// fonction d'Animations des faces du cube ====>




var animeRotateFace = function animeRotateFace(sens, c1, fC1b, c2, fC2b, c3, fC3b, c4, fC4b, c5, c6, fC6b, c7, fC7b, c8, fC8b, c9, fC9b, rotateDebut, rotateFin) {

	// Creation de la div à animer et ajout des faces concernées. 
	isReady = false;
	var divTurn = document.getElementById('divTurn');
	divTurn.style.transition = "transform " + ms + "ms ease";
	divTurn.appendChild(c1);
	divTurn.appendChild(c2);
	divTurn.appendChild(c3);
	divTurn.appendChild(c4);
	divTurn.appendChild(c5);
	divTurn.appendChild(c6);
	divTurn.appendChild(c7);
	divTurn.appendChild(c8);
	divTurn.appendChild(c9);

	if (sens === "aig") {
		var couleurs = [fC7b[1].color, fC7b[3].color, fC7b[5].color, fC4b[1].color, fC4b[3].color, fC1b[1].color, fC1b[5].color, fC1b[3].color,
						fC8b[1].color, fC8b[3].color, fC2b[1].color, fC2b[3].color, fC9b[1].color,fC9b[5].color,fC9b[3].color,
						fC6b[1].color, fC6b[3].color, fC3b[1].color, fC3b[3].color, fC3b[5].color];

	}else if (sens === "inv") {				
		var couleurs = [fC3b[1].color, fC3b[5].color, fC3b[3].color, fC6b[1].color, fC6b[3].color, fC9b[1].color, fC9b[3].color, fC9b[5].color,
						fC2b[1].color, fC2b[3].color, fC8b[1].color, fC8b[3].color, fC1b[1].color,fC1b[3].color,fC1b[5].color,
						fC4b[1].color, fC4b[3].color, fC7b[1].color, fC7b[5].color, fC7b[3].color];
	}
	var face = [fC1b[0],fC1b[2],fC1b[4],fC2b[0],fC2b[2],fC3b[0],fC3b[2],fC3b[4],
									fC4b[0],fC4b[2],fC6b[0],fC6b[2],fC7b[0],fC7b[2],fC7b[4],fC8b[0],
									fC8b[2],fC9b[0],fC9b[2],fC9b[4]];
	var couleursTemp = [];
	for (var i = 0; i < couleurs.length; i++) {
		couleursTemp[i] = couleurs[i] ;
	}
	var Transitionend = function Transitionend(){

		for (var i = 0; i < couleursTemp.length; i++) {

		face[i].style.backgroundColor = conversionColor(couleursTemp[i]);
		}

				
		fC7b[1].color = couleursTemp[12];
		fC7b[3].color = couleursTemp[13];
		fC7b[5].color = couleursTemp[14];
		fC4b[1].color = couleursTemp[8];
		fC4b[3].color = couleursTemp[9];
		fC1b[1].color = couleursTemp[0];
		fC1b[3].color = couleursTemp[1];
		fC1b[5].color = couleursTemp[2];
		fC8b[1].color = couleursTemp[15];
		fC8b[3].color = couleursTemp[16];
		fC2b[1].color = couleursTemp[3];
		fC2b[3].color = couleursTemp[4];
		fC9b[1].color = couleursTemp[17];
		fC9b[3].color = couleursTemp[18];
		fC9b[5].color = couleursTemp[19];
		fC6b[1].color = couleursTemp[10];
		fC6b[3].color = couleursTemp[11];
		fC3b[1].color = couleursTemp[5];
		fC3b[3].color = couleursTemp[6];
		fC3b[5].color = couleursTemp[7];
	
				
		// et on reinitialise le tous
		divTurn.style.transition = "none";
		divTurn.style.transform = rotateDebut;
		container.appendChild(c1);
		container.appendChild(c2);
		container.appendChild(c3);
		container.appendChild(c4);
		container.appendChild(c5);
		container.appendChild(c6);
		container.appendChild(c7);
		container.appendChild(c8);
		container.appendChild(c9);
		isReady = true;
		divTurn.removeEventListener('transitionend',Transitionend);

	}
	divTurn.addEventListener('transitionend',Transitionend);
	divTurn.style.transform = rotateFin;
	
}





///////////////////////// Turn FA

var tfaaig = function tFAAig() {

	returnFcInOrder(fC1,fC2,fC3,fC4,fC6,fC7,fC8,fC9,"fA","fH","fD","fP","fG","fB");

	animeRotateFace("aig", cube1, fC1, cube2, fC2, cube3, fC3, cube4, fC4, cube5, cube6, fC6, cube7, fC7, cube8, fC8, cube9, fC9, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(90deg) rotateY(0deg) rotateX(0deg)");
	
}

var tfainv = function tFAInv() {

	returnFcInOrder(fC1,fC2,fC3,fC4,fC6,fC7,fC8,fC9,"fA","fH","fD","fP","fG","fB");
	animeRotateFace("inv", cube1, fC1, cube2, fC2, cube3, fC3, cube4, fC4, cube5, cube6, fC6, cube7, fC7, cube8, fC8, cube9, fC9, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(-90deg) rotateY(0deg) rotateX(0deg)");
	

}

////////////////////////// Turn FH


 var tfhaig = function tFHAig() {

	returnFcInOrder(fC19,fC20,fC21,fC10,fC12,fC1,fC2,fC3,"fH","fP","fD","fB","fG","fA");

	animeRotateFace("aig", cube19, fC19, cube20, fC20, cube21, fC21, cube10, fC10, cube11, cube12, fC12, cube1, fC1, cube2, fC2, cube3, fC3, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(0deg) rotateY(-90deg) rotateX(0deg)");
	

}

var tfhinv = function tFHInv() {

	returnFcInOrder(fC19,fC20,fC21,fC10,fC12,fC1,fC2,fC3,"fH","fP","fD","fB","fG","fA");
	animeRotateFace("inv", cube19, fC19, cube20, fC20, cube21, fC21, cube10, fC10, cube11, cube12, fC12, cube1, fC1, cube2, fC2, cube3, fC3, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(0deg) rotateY(90deg) rotateX(0deg)");
	

}

///////////////////////////// Turn FD

var tfdaig = function tFDAig() {

	returnFcInOrder(fC3,fC12,fC21,fC6,fC24,fC9,fC18,fC27,"fD","fH","fP","fG","fA","fB");
	animeRotateFace("aig", cube3, fC3, cube12, fC12, cube21, fC21, cube6, fC6, cube15, cube24, fC24, cube9, fC9, cube18, fC18, cube27, fC27, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(0deg) rotateY(0deg) rotateX(90deg)");
	

}

var tfdinv = function tFDInv() {

	returnFcInOrder(fC3,fC12,fC21,fC6,fC24,fC9,fC18,fC27,"fD","fH","fP","fG","fA","fB");
	animeRotateFace("inv", cube3, fC3, cube12, fC12, cube21, fC21, cube6, fC6, cube15, cube24, fC24, cube9, fC9, cube18, fC18, cube27, fC27, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(0deg) rotateY(0deg) rotateX(-90deg)");



}

////////////////////////// Turn FP

var tfpaig = function tFPAig() {

	returnFcInOrder(fC21,fC20,fC19,fC24,fC22,fC27,fC26,fC25,"fP","fH","fG","fA","fD","fB");
	animeRotateFace("aig", cube21, fC21, cube20, fC20, cube19, fC19, cube24, fC24, cube23, cube22, fC22, cube27, fC27, cube26, fC26, cube25, fC25, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(-90deg) rotateY(0deg) rotateX(0deg)");
	


}

var tfpinv = function tFPInv() {

	returnFcInOrder(fC21,fC20,fC19,fC24,fC22,fC27,fC26,fC25,"fP","fH","fG","fA","fD","fB");
	animeRotateFace("inv", cube21, fC21, cube20, fC20, cube19, fC19, cube24, fC24, cube23, cube22, fC22, cube27, fC27, cube26, fC26, cube25, fC25, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(90deg) rotateY(0deg) rotateX(0deg)");


}

////////////////////// Turn FG

var tfgaig = function tFGAig() {

	returnFcInOrder(fC19,fC10,fC1,fC22,fC4,fC25,fC16,fC7,"fG","fH","fA","fD","fP","fB");
	animeRotateFace("aig", cube19, fC19, cube10, fC10, cube1, fC1, cube22, fC22, cube13, cube4, fC4, cube25, fC25, cube16, fC16, cube7, fC7, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(0deg) rotateY(0deg) rotateX(-90deg)");
	

}

var tfginv = function tFGInv() {

	returnFcInOrder(fC19,fC10,fC1,fC22,fC4,fC25,fC16,fC7,"fG","fH","fA","fD","fP","fB");
	animeRotateFace("inv", cube19, fC19, cube10, fC10, cube1, fC1, cube22, fC22, cube13, cube4, fC4, cube25, fC25, cube16, fC16, cube7, fC7, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(0deg) rotateY(0deg) rotateX(90deg)");
	


}

/////////////////////// Turn FB

 var tfbaig = function tFBAig() {

	returnFcInOrder(fC7,fC8,fC9,fC16,fC18,fC25,fC26,fC27,"fB","fA","fD","fH","fG","fP");
	animeRotateFace("aig", cube7, fC7, cube8, fC8, cube9, fC9, cube16, fC16, cube17, cube18, fC18, cube25, fC25, cube26, fC26, cube27, fC27, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(0deg) rotateY(90deg) rotateX(0deg)");
	


}

var tfbinv = function tFBInv() {

	returnFcInOrder(fC7,fC8,fC9,fC16,fC18,fC25,fC26,fC27,"fB","fA","fD","fH","fG","fP");
	animeRotateFace("inv", cube7, fC7, cube8, fC8, cube9, fC9, cube16, fC16, cube17, cube18, fC18, cube25, fC25, cube26, fC26, cube27, fC27, "rotate(0deg) rotateY(0deg) rotateX(0deg)", "rotate(0deg) rotateY(-90deg) rotateX(0deg)");
	

}

//////// fonction principale des animations /////////

function lunchAnimation(nombreAnimation, tableauAction){

	divTurn.style.willChange = "transform";
	if (allIsReady) {
		allIsReady = false;
		var animeAccount = 0;
		var interval = setInterval(() => {
			for(v = 0; v < tableauAction.length; v++){
			
				if (animeAccount === v && isReady === true){
			
					tableauAction[v]();
					animeAccount += 1;
				
				}
			}
			if (animeAccount >= nombreAnimation && isReady) {
			
				clearInterval(interval);
				animeAccount = 0;
				reset();
				allIsReady = true;
				divTurn.style.willChange = "none";
				
			
			}
		}, 50);
	}
}

// Fonction de permutation universel =======>
var resultCroixBlanche = [];
var resultCoinBlanc = [];
var resultArreteSecondEtage = [];
var ind = 0;
function allPermutation(Arr, level, tableau)
{
	if ((Arr.length - level) <= 1) // Si le nombre d'element est inferieur ou egale a 1
	{
		tableau[ind] = [Arr[0], Arr[1], Arr[2], Arr[3]];
		ind++;
	
	}
	else // sinn
	{
		for (var i = 0; i < Arr.length-level ; i++) // pour chaque elem du tableau
		{
			allPermutation(permutationCirculaire(Arr, level), level+1, tableau); // reapplique la fonction pour chaque niveaux
		}
	}

}

function permutationCirculaire(Arr, i){ // permutation circulaire
	var temp = Arr[i];
	for(var j=i;j < Arr.length-1;j++)
	{
		Arr[j] = Arr[j+1];
	}
	Arr[Arr.length-1] = temp;
	return Arr;
}

// déclanche la fonction
allPermutation(["searchC2", "searchC10", "searchC12", "searchC20"], 0, resultCroixBlanche);
ind = 0;
allPermutation(["searchCoin1", "searchCoin3", "searchCoin19", "searchCoin21"], 0, resultCoinBlanc);
ind = 0;
allPermutation(["searchArrete4", "searchArrete6", "searchArrete22", "searchArrete24"], 0, resultArreteSecondEtage);
ind = 0;

////////// fonction de calcul de la meilleur resolution possible ///////////


// Tableaux Des faces du Cube fictif ====>

var fHT = ["bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla", "bla"];

var fAT = ["r", "r", "r", "r", "r", "r", "r", "r", "r"];

var fDT = ["ble", "ble", "ble", "ble", "ble", "ble", "ble", "ble", "ble"];

var fPT = ["o", "o", "o", "o", "o", "o", "o", "o", "o"];

var fGT = ["v", "v", "v", "v", "v", "v", "v", "v", "v"];

var fBT = ["j", "j", "j", "j", "j", "j", "j", "j", "j"];

transformInObjet(fHT,"H", "bla","fH");
transformInObjet(fAT,"A", "r","fA");
transformInObjet(fDT,"D", "ble","fD");
transformInObjet(fPT,"P", "o","fP");
transformInObjet(fGT,"G", "v","fG");
transformInObjet(fBT,"B", "j","fB");

var reset = function reset() {

	fHT[0].color = fH[0].color;
	fHT[1].color = fH[1].color;
	fHT[2].color = fH[2].color;
	fHT[3].color = fH[3].color;
	fHT[5].color = fH[5].color;
	fHT[6].color = fH[6].color;
	fHT[7].color = fH[7].color;
	fHT[8].color = fH[8].color;
	fAT[0].color = fA[0].color;
	fAT[1].color = fA[1].color;
	fAT[2].color = fA[2].color;
	fAT[3].color = fA[3].color;
	fAT[5].color = fA[5].color;
	fAT[6].color = fA[6].color;
	fAT[7].color = fA[7].color;
	fAT[8].color = fA[8].color;
	fDT[0].color = fD[0].color;
	fDT[1].color = fD[1].color;
	fDT[2].color = fD[2].color;
	fDT[3].color = fD[3].color;
	fDT[5].color = fD[5].color;
	fDT[6].color = fD[6].color;
	fDT[7].color = fD[7].color;
	fDT[8].color = fD[8].color;
	fPT[0].color = fP[0].color;
	fPT[1].color = fP[1].color;
	fPT[2].color = fP[2].color;
	fPT[3].color = fP[3].color;
	fPT[5].color = fP[5].color;
	fPT[6].color = fP[6].color;
	fPT[7].color = fP[7].color;
	fPT[8].color = fP[8].color;
	fGT[0].color = fG[0].color;
	fGT[1].color = fG[1].color;
	fGT[2].color = fG[2].color;
	fGT[3].color = fG[3].color;
	fGT[5].color = fG[5].color;
	fGT[6].color = fG[6].color;
	fGT[7].color = fG[7].color;
	fGT[8].color = fG[8].color;
	fBT[0].color = fB[0].color;
	fBT[1].color = fB[1].color;
	fBT[2].color = fB[2].color;
	fBT[3].color = fB[3].color;
	fBT[5].color = fB[5].color;
	fBT[6].color = fB[6].color;
	fBT[7].color = fB[7].color;
	fBT[8].color = fB[8].color;

}
var tableauSauvegarde1 = [];
var tableauSauvegarde2 = [];
var sauvegarde = function sauvegarde(tableauSauvegarde) {

	tableauSauvegarde[0] = fHT[0].color;
	tableauSauvegarde[1] = fHT[1].color;
	tableauSauvegarde[2] = fHT[2].color;
	tableauSauvegarde[3] = fHT[3].color;
	tableauSauvegarde[4] = fHT[5].color;
	tableauSauvegarde[5] = fHT[6].color;
	tableauSauvegarde[6] = fHT[7].color;
	tableauSauvegarde[7] = fHT[8].color;
	tableauSauvegarde[8] = fAT[0].color;
	tableauSauvegarde[9] = fAT[1].color;
	tableauSauvegarde[10] = fAT[2].color;
	tableauSauvegarde[11] = fAT[3].color;
	tableauSauvegarde[12] = fAT[5].color;
	tableauSauvegarde[13] = fAT[6].color;
	tableauSauvegarde[14] = fAT[7].color;
	tableauSauvegarde[15] = fAT[8].color;
	tableauSauvegarde[16] = fDT[0].color;
	tableauSauvegarde[17] = fDT[1].color;
	tableauSauvegarde[18] = fDT[2].color;
	tableauSauvegarde[19] = fDT[3].color;
	tableauSauvegarde[20] = fDT[5].color;
	tableauSauvegarde[21] = fDT[6].color;
	tableauSauvegarde[22] = fDT[7].color;
	tableauSauvegarde[23] = fDT[8].color;
	tableauSauvegarde[24] = fPT[0].color;
	tableauSauvegarde[25] = fPT[1].color;
	tableauSauvegarde[26] = fPT[2].color;
	tableauSauvegarde[27] = fPT[3].color;
	tableauSauvegarde[28] = fPT[5].color;
	tableauSauvegarde[29] = fPT[6].color;
	tableauSauvegarde[30] = fPT[7].color;
	tableauSauvegarde[31] = fPT[8].color;
	tableauSauvegarde[32] = fGT[0].color;
	tableauSauvegarde[33] = fGT[1].color;
	tableauSauvegarde[34] = fGT[2].color;
	tableauSauvegarde[35] = fGT[3].color;
	tableauSauvegarde[36] = fGT[5].color;
	tableauSauvegarde[37] = fGT[6].color;
	tableauSauvegarde[38] = fGT[7].color;
	tableauSauvegarde[39] = fGT[8].color;
	tableauSauvegarde[40] = fBT[0].color;
	tableauSauvegarde[41] = fBT[1].color;
	tableauSauvegarde[42] = fBT[2].color;
	tableauSauvegarde[43] = fBT[3].color;
	tableauSauvegarde[44] = fBT[5].color;
	tableauSauvegarde[45] = fBT[6].color;
	tableauSauvegarde[46] = fBT[7].color;
	tableauSauvegarde[47] = fBT[8].color;

}
var restore = function restore(tableauSauvegarde) {

	fHT[0].color = tableauSauvegarde[0];
	fHT[1].color = tableauSauvegarde[1];
	fHT[2].color = tableauSauvegarde[2];
	fHT[3].color = tableauSauvegarde[3];
	fHT[5].color = tableauSauvegarde[4];
	fHT[6].color = tableauSauvegarde[5];
	fHT[7].color = tableauSauvegarde[6];
	fHT[8].color = tableauSauvegarde[7];
	fAT[0].color = tableauSauvegarde[8];
	fAT[1].color = tableauSauvegarde[9];
	fAT[2].color = tableauSauvegarde[10];
	fAT[3].color = tableauSauvegarde[11];
	fAT[5].color = tableauSauvegarde[12];
	fAT[6].color = tableauSauvegarde[13];
	fAT[7].color = tableauSauvegarde[14];
	fAT[8].color = tableauSauvegarde[15];
	fDT[0].color = tableauSauvegarde[16];
	fDT[1].color = tableauSauvegarde[17];
	fDT[2].color = tableauSauvegarde[18];
	fDT[3].color = tableauSauvegarde[19];
	fDT[5].color = tableauSauvegarde[20];
	fDT[6].color = tableauSauvegarde[21];
	fDT[7].color = tableauSauvegarde[22];
	fDT[8].color = tableauSauvegarde[23];
	fPT[0].color = tableauSauvegarde[24];
	fPT[1].color = tableauSauvegarde[25];
	fPT[2].color = tableauSauvegarde[26];
	fPT[3].color = tableauSauvegarde[27];
	fPT[5].color = tableauSauvegarde[28];
	fPT[6].color = tableauSauvegarde[29];
	fPT[7].color = tableauSauvegarde[30];
	fPT[8].color = tableauSauvegarde[31];
	fGT[0].color = tableauSauvegarde[32];
	fGT[1].color = tableauSauvegarde[33];
	fGT[2].color = tableauSauvegarde[34];
	fGT[3].color = tableauSauvegarde[35];
	fGT[5].color = tableauSauvegarde[36];
	fGT[6].color = tableauSauvegarde[37];
	fGT[7].color = tableauSauvegarde[38];
	fGT[8].color = tableauSauvegarde[39];
	fBT[0].color = tableauSauvegarde[40];
	fBT[1].color = tableauSauvegarde[41];
	fBT[2].color = tableauSauvegarde[42];
	fBT[3].color = tableauSauvegarde[43];
	fBT[5].color = tableauSauvegarde[44];
	fBT[6].color = tableauSauvegarde[45];
	fBT[7].color = tableauSauvegarde[46];
	fBT[8].color = tableauSauvegarde[47];

}




var fC1T = [document.getElementById("cube1fA0"), fAT[0], document.getElementById("cube1fH6"), fHT[6], document.getElementById("cube1fG2"), fGT[2]];
var fC2T = [document.getElementById("cube2fA1"), fAT[1], document.getElementById("cube2fH7"), fHT[7]];
var fC3T = [document.getElementById("cube3fA2"), fAT[2], document.getElementById("cube3fH8"), fHT[8], document.getElementById("cube3fD0"), fDT[0]];
var fC4T = [document.getElementById("cube4fA3"), fAT[3], document.getElementById("cube4fG5"), fGT[5]];
var fC6T = [document.getElementById("cube6fA5"), fAT[5], document.getElementById("cube6fD3"), fDT[3]];
var fC7T = [document.getElementById("cube7fA6"), fAT[6], document.getElementById("cube7fG8"), fGT[8], document.getElementById("cube7fB0"), fBT[0]];
var fC8T = [document.getElementById("cube8fA7"), fAT[7], document.getElementById("cube8fB1"), fBT[1]];
var fC9T = [document.getElementById("cube9fA8"), fAT[8], document.getElementById("cube9fD6"), fDT[6], document.getElementById("cube9fB2"), fBT[2]];
var fC10T = [document.getElementById("cube10fH3"), fHT[3], document.getElementById("cube10fG1"), fGT[1]];
var fC12T = [document.getElementById("cube12fH5"), fHT[5], document.getElementById("cube12fD1"), fDT[1]];
var fC16T = [document.getElementById("cube16fG7"), fGT[7], document.getElementById("cube16fB3"), fBT[3]];
var fC18T = [document.getElementById("cube18fD7"), fDT[7], document.getElementById("cube18fB5"), fBT[5]];
var fC19T = [document.getElementById("cube19fH0"), fHT[0], document.getElementById("cube19fG0"), fGT[0], document.getElementById("cube19fP2"), fPT[2]];
var fC20T = [document.getElementById("cube20fH1"), fHT[1], document.getElementById("cube20fP1"), fPT[1]];
var fC21T = [document.getElementById("cube21fH2"), fHT[2], document.getElementById("cube21fD2"), fDT[2], document.getElementById("cube21fP0"), fPT[0]];
var fC22T = [document.getElementById("cube22fG3"), fGT[3], document.getElementById("cube22fP5"), fPT[5]];
var fC24T = [document.getElementById("cube24fD5"), fDT[5], document.getElementById("cube24fP3"), fPT[3]];
var fC25T = [document.getElementById("cube25fG6"), fGT[6], document.getElementById("cube25fP8"), fPT[8], document.getElementById("cube25fB6"), fBT[6]];
var fC26T = [document.getElementById("cube26fP7"), fPT[7], document.getElementById("cube26fB7"), fBT[7]];
var fC27T = [document.getElementById("cube27fD8"), fDT[8], document.getElementById("cube27fP6"), fPT[6], document.getElementById("cube27fB8"), fBT[8]];

// fonction de rotation des faces du cube dans le tableau du cube fictif ====>

function faceFictivRotate(sens, fC1b, fC2b, fC3b, fC4b, fC6b, fC7b, fC8b, fC9b) {

	
	if (sens === "aig") {
		var couleurs = [fC7b[1].color, fC7b[3].color, fC7b[5].color, fC4b[1].color, fC4b[3].color, fC1b[1].color, fC1b[5].color, fC1b[3].color,
						fC8b[1].color, fC8b[3].color, fC2b[1].color, fC2b[3].color, fC9b[1].color,fC9b[5].color,fC9b[3].color,
						fC6b[1].color, fC6b[3].color, fC3b[1].color, fC3b[3].color, fC3b[5].color];
	}else if (sens === "inv") {				
		var couleurs = [fC3b[1].color, fC3b[5].color, fC3b[3].color, fC6b[1].color, fC6b[3].color, fC9b[1].color, fC9b[3].color, fC9b[5].color,
						fC2b[1].color, fC2b[3].color, fC8b[1].color, fC8b[3].color, fC1b[1].color,fC1b[3].color,fC1b[5].color,
						fC4b[1].color, fC4b[3].color, fC7b[1].color, fC7b[5].color, fC7b[3].color];
	}
	var couleursTemp = ["","","","","","","","","","","","","","","","","","","",""];


	for (var i = 0; i < couleurs.length; i++) {
		couleursTemp[i] = couleurs[i];

	}

	fC7b[1].color = couleursTemp[12];
	fC7b[3].color = couleursTemp[13];
	fC7b[5].color = couleursTemp[14];
	fC4b[1].color = couleursTemp[8];
	fC4b[3].color = couleursTemp[9];
	fC1b[1].color = couleursTemp[0];
	fC1b[3].color = couleursTemp[1];
	fC1b[5].color = couleursTemp[2];
	fC8b[1].color = couleursTemp[15];
	fC8b[3].color = couleursTemp[16];
	fC2b[1].color = couleursTemp[3];
	fC2b[3].color = couleursTemp[4];
	fC9b[1].color = couleursTemp[17];
	fC9b[3].color = couleursTemp[18];
	fC9b[5].color = couleursTemp[19];
	fC6b[1].color = couleursTemp[10];
	fC6b[3].color = couleursTemp[11];
	fC3b[1].color = couleursTemp[5];
	fC3b[3].color = couleursTemp[6];
	fC3b[5].color = couleursTemp[7];
	

}

////////////////////////// Turn FH fictif

 var tfhaigt = function tFHAigT() {

	returnFcInOrder(fC19T,fC20T,fC21T,fC10T,fC12T,fC1T,fC2T,fC3T,"fH","fP","fD","fB","fG","fA");
	faceFictivRotate("aig", fC19T, fC20T, fC21T, fC10T, fC12T, fC1T, fC2T, fC3T);
	tableauFonction.push(tfhaig);


}

var tfhinvt = function tFHInvT() {

	returnFcInOrder(fC19T,fC20T,fC21T,fC10T,fC12T,fC1T,fC2T,fC3T,"fH","fP","fD","fB","fG","fA");
	faceFictivRotate("inv", fC19T, fC20T, fC21T, fC10T, fC12T, fC1T, fC2T, fC3T);
	tableauFonction.push(tfhinv);

}

///////////////////////// Turn FA fictif

var tfaaigt = function tFAAigT() {

	returnFcInOrder(fC1T,fC2T,fC3T,fC4T,fC6T,fC7T,fC8T,fC9T,"fA","fH","fD","fP","fG","fB");
	faceFictivRotate("aig", fC1T, fC2T, fC3T, fC4T, fC6T, fC7T, fC8T, fC9T);
	tableauFonction.push(tfaaig);

}

var tfainvt = function tFAInvT() {

	returnFcInOrder(fC1T,fC2T,fC3T,fC4T,fC6T,fC7T,fC8T,fC9T,"fA","fH","fD","fP","fG","fB");
	faceFictivRotate("inv", fC1T, fC2T, fC3T, fC4T, fC6T, fC7T, fC8T, fC9T);
	tableauFonction.push(tfainv);
}

///////////////////////////// Turn FD fictif

var tfdaigt = function tFDAigT() {

	returnFcInOrder(fC3T,fC12T,fC21T,fC6T,fC24T,fC9T,fC18T,fC27T,"fD","fH","fP","fG","fA","fB");
	faceFictivRotate("aig", fC3T, fC12T, fC21T, fC6T, fC24T, fC9T, fC18T, fC27T);
	tableauFonction.push(tfdaig);

}

var tfdinvt = function tFDInvT() {

	returnFcInOrder(fC3T,fC12T,fC21T,fC6T,fC24T,fC9T,fC18T,fC27T,"fD","fH","fP","fG","fA","fB");
	faceFictivRotate("inv", fC3T, fC12T, fC21T, fC6T, fC24T, fC9T, fC18T, fC27T);
	tableauFonction.push(tfdinv);

}

////////////////////////// Turn FP fictif

var tfpaigt = function tFPAigT() {

	returnFcInOrder(fC21T,fC20T,fC19T,fC24T,fC22T,fC27T,fC26T,fC25T,"fP","fH","fG","fA","fD","fB");
	faceFictivRotate("aig", fC21T, fC20T, fC19T, fC24T, fC22T, fC27T, fC26T, fC25T);
	tableauFonction.push(tfpaig);

}

var tfpinvt = function tFPInvT() {

	returnFcInOrder(fC21T,fC20T,fC19T,fC24T,fC22T,fC27T,fC26T,fC25T,"fP","fH","fG","fA","fD","fB");
	faceFictivRotate("inv", fC21T, fC20T, fC19T, fC24T, fC22T, fC27T, fC26T, fC25T);
	tableauFonction.push(tfpinv);

}

////////////////////// Turn FG fictif

var tfgaigt = function tFGAigT() {

	returnFcInOrder(fC19T,fC10T,fC1T,fC22T,fC4T,fC25T,fC16T,fC7T,"fG","fH","fA","fD","fP","fB");
	faceFictivRotate("aig", fC19T, fC10T, fC1T, fC22T, fC4T, fC25T, fC16T, fC7T);
	tableauFonction.push(tfgaig);	

}

var tfginvt = function tFGInvT() {

	returnFcInOrder(fC19T,fC10T,fC1T,fC22T,fC4T,fC25T,fC16T,fC7T,"fG","fH","fA","fD","fP","fB");
	faceFictivRotate("inv", fC19T, fC10T, fC1T, fC22T, fC4T, fC25T, fC16T, fC7T);
	tableauFonction.push(tfginv);	

}

/////////////////////// Turn FB fictif

 var tfbaigt = function tFBAigT() {

	returnFcInOrder(fC7T,fC8T,fC9T,fC16T,fC18T,fC25T,fC26T,fC27T,"fB","fA","fD","fH","fG","fP");
	faceFictivRotate("aig", fC7T, fC8T, fC9T, fC16T, fC18T, fC25T, fC26T, fC27T);
	tableauFonction.push(tfbaig);

}

var tfbinvt = function tFBInvT() {

	returnFcInOrder(fC7T,fC8T,fC9T,fC16T,fC18T,fC25T,fC26T,fC27T,"fB","fA","fD","fH","fG","fP");
	faceFictivRotate("inv", fC7T, fC8T, fC9T, fC16T, fC18T, fC25T, fC26T, fC27T);
	tableauFonction.push(tfbinv);
}


var searchCubeCroixBlanche = function searchCubeCroixBlanche(f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21, f22, f23, f24, c1, c2, c3, c4, c5, fonction1, fonction2, fonction3, fonction4, fonction5, fonction6, fonction7, fonction8, fonction9, fonction10, fonction11, fonction12, ifIsBest) {
 
 
	if( f1 !== c1 || f2 !== c2 ){
 
		 if ( f1 === c2 && f2 === c1){
 
			if (( f3 === c2 && f4 === c3) || (f5 === c2 && f6=== c4) || (f7 === c2 && f8 === c5)) {
 
 				fonction1();
				fonction2();
 				fonction3();
 				fonction4();
 
 			}else {
 
 				fonction1();
 				fonction3();
				fonction4();

 			}
 			
 		}else if (( f3 === c1 || f3 === c2) && (f4 === c1 || f4 === c2)) {
 
 			if ( f3 === c2){
 			
 				if ((f5 === c2 && f6 === c4) || (f7 === c2 && f8 === c5)) {				
 
 					fonction5();
					fonction4();
					fonction6();
					fonction2();
 
 				}else {
 
 					fonction2();
 
 				}
 				
 			} else {
 
 				fonction5();
 				fonction1();
 
 			}
 
 		}else if ((f5 === c1 || f5 === c2) && (f6 === c1 || f6 === c2)) {
 
 			if ( f5 === c2){
 
 				if ((f3 === c2 && f4 === c3) || (f7 === c2 && f8 === c5)) {
 
 					fonction7();
 					fonction2();
 					fonction3();
 					fonction4();
 
 				} else {
 
 					fonction4();
 
 				}
 
 			} else {
 
 				fonction7();
 				fonction8();
 
 			}
 
 		}else if ((f7 === c1 || f7 === c2) && (f8 === c1 || f8 === c2)) {
 
 			if ( f7 === c2){
 			
 				if ((f3 === c2 && f4 === c3) && (f5 === c2 && f6 === c4)) {
 
 					fonction9();
 					fonction9();
 					fonction10();
 					fonction10();
 					fonction1();
 					fonction1();
 
 				}else if (f3 === c2 && f4 === c3){
 
 					fonction11();
 					fonction3();
 					fonction3();
 					fonction8();
 
 
 				}else if (f5 === c2 && f6 === c4) {
 
 					fonction9();
 					fonction5();
 					fonction5();
 					fonction1();
 
 				}else {
 
 					fonction4();
 					fonction4();
 
 				}
 
 			} else {
 
 				if ((f3 === c2 && f4 === c3) || (f5 === c2 && f6 === c4)) {
 
 					fonction4();//haig
 					fonction7();//dinv
 					fonction2();//hinv
 					fonction8();//ainv


 				}else {
 
 					fonction9();
 					fonction5();//gaig
 					fonction2();//hinv
 
 				}
 
 			}
 
 		}else if ((f9 === c1 || f9 === c2) && (f10 === c1 || f10 === c2)) {
 
 			if ( f9 === c1){
 
 				fonction1();
 
 			} else {
 
 				if ((f3 === c2 && f4 === c3) || (f5 === c2 && f6 === c4) || (f7 === c2 && f8 === c5)) {
 
 					fonction4();
 					fonction6();
 					fonction2();
 
 				}else {
 
 					fonction6();
 					fonction2();
 
 				}
 
 			}
 
 		}else if ((f11 === c1 || f11 === c2) && (f12 === c1 || f12 === c2)) {
 
 			if ( f11 === c1){
 
 				fonction8();
 
 			} else {
 
 				if ((f3 === c2 && f4 === c3) || (f5 === c2 && f6 === c4) || (f7 === c2 && f8 === c5)) {
 
 					fonction2();
 					fonction3();
 					fonction4();
 				
 
 				}else {
 
 					fonction3();
 					fonction4();
 
 				}
 
 			}
 
 		}else if ((f13 === c1 || f13 === c2) && (f14 === c1 || f14 === c2)) {
 
 			if ( f13 === c1){
 
 
 				if ((f5 === c2 && f6 === c4) || (f7 === c2 && f8 === c5) || (f3 === c2 && f4 === c3)){
 
 					fonction4();
 					fonction5();
 					fonction2();
 
 				}else {
 
 					fonction5();
 					fonction2();
 
 				}
 
 			} else {
 
 				if (f3 === c2 && f4 === c3) {
 
 					fonction5();
 					fonction5();
 					fonction1();
 					fonction5();
 					fonction5();
 
 				}else {
 
 					fonction5();
 					fonction5();
 					fonction1();
 
 				}	
 
 			}
 
 		}else if ((f15 === c1 || f15 === c2) && (f16 === c1 || f16 === c2)) {
 
 			if ( f15 === c1){
 
 
 				if ((f3 === c2 && f4 === c3) || (f7 === c2 && f8 === c5) || (f5 === c2 && f6 === c4)){
 
 					fonction2();
 					fonction7();
 					fonction4();
 					
 
 				}else {
 
 					fonction7();
 					fonction4();
 
 				}
 
 			} else {
 
 				if (f5 === c2 && f6 === c4) {
 
 					fonction3();
 					fonction3();
 					fonction8();
 					fonction3();
 					fonction3();
 
 				}else {
 
 					fonction3();
 					fonction3();
 					fonction8();
 
 				}
 
 			}
 
 		}else if ((f17 === c1 || f17 === c2) && (f18 === c1 || f18 === c2)) {
 
 			if ( f17 === c1){
 
 				fonction1();
 				fonction1(); //////
 
 			} else {
 
 				if ((f3 === c2 && f4 === c3) && (f5 === c2 && f6 === c4)){
 
 					fonction12(); //fbinv
 					fonction6(); //fginv
 					fonction1(); //faaig
 					fonction5(); //fgaig
 
 				} else if (f3 === c2 && f4 === c3) {
 
 
 					fonction10(); //fbaig
 					fonction3(); //fdaig
 					fonction8(); //fainv
 
 
 				} else {
 
 					fonction12(); //fbinv
 					fonction6(); //fgaig
 					fonction1(); //faaig
 
 				}
 				
 			}
 
 		}else if ((f19 === c1 || f19 === c2) && (f20 === c1 || f20 === c2)) {
 
 			if ( f19 === c1){
 
 				fonction10();
 				fonction1();
 				fonction1();
 
 			} else {
 
 				if (f3 === c2 && f4 === c3) {
 
 					fonction6();
 					fonction1();
 					fonction5();
 
 				} else {
 
 					fonction6();
 					fonction1();

 
 				}
 
 			}
 
 		}else if ((f21 === c1 || f21 === c2) && (f22 === c1 || f22 === c2)) {
 
 			if ( f21 === c1){
 
 				fonction12();
 				fonction1();
 				fonction1();
 
 			} else {
 
 				if (f5 === c2 && f6 === c4) {
 
 					fonction3(); //daig
 					fonction8(); //ainv
 					fonction7(); //dinv

 
 				} else {
 
 					fonction3(); //daig
 					fonction8(); //ainv
 
 				}
 
 			}
 
 		}else if ((f23 === c1 || f23 === c2) && (f24 === c1 || f24 === c2)) {
 
 			if ( f23 === c1){
 
 				fonction10();
 				fonction10();
 				fonction1();
 				fonction1(); 
 
 			} else {
 
 				if ((f3 === c2 && f4 === c3) && (f5 === c2 && f6 === c4)){
 
 					fonction10();
 					fonction6();
 					fonction1();
 					fonction5();
 
 				} else if (f3 === c2 && f4 === c3) {
 
 
 					fonction12();
 					fonction3();
 					fonction8();
 
 
 				} else {
 
 					fonction10();
 					fonction6();
 					fonction1();
 
 				}
 
 			}
 
 		}
 		
 	}
 
}

var searchCoinBlanc = function searchCoinBlanc(f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, f21, f22, f23, f24, c1, c2, c3, fonction1, fonction2, fonction3, fonction4, fonction5, fonction6, fonction7, fonction8, fonction9, fonction10, ifIsBest) {
// (fHT[6].color, fAT[0].color, fGT[2].color, fHT[8].color, fAT[2].color, fDT[0].color, fHT[0].color, fPT[2].color, fGT[0].color, fHT[2].color, fPT[0].color, fDT[2].color, fAT[6].color, fGT[8].color, fBT[0].color, fAT[8].color, fDT[6].color, fBT[2].color, fPT[8].color, fGT[6].color, fBT[6].color, fPT[6].color, fDT[8].color, fBT[8].color, "bla", "r", "v", tfainvt, tfbinvt, tfaaigt, tfbaigt, tfdinvt, tfdaigt, tfgaigt, tfginvt, tfpinvt, tfpaigt, ifIsBest)
	if (f1 !== c1 || f2 !== c2 || f3 !== c3) {
	
		if (f1 === c3 && f2 === c1 && f3 === c2) {
		
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f1 === c2 && f2 === c3 && f3 === c1){
		
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction1();
			fonction4();
			fonction4();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f4 === c1 && f5 === c3 && f6 === c2){
		
			fonction5();
			fonction2();
			fonction6();
			fonction7();
			fonction4();
			fonction8();
			
		}else if (f4 === c3 && f5 === c2 && f6 === c1) {
		
			fonction5();
			fonction2();
			fonction6();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f4 === c2 && f5 === c1 && f6 === c3) {
		
			fonction5();
			fonction2();
			fonction6();
			fonction1();
			fonction4();
			fonction4();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			fonction3();
			
		}else if (f7 === c1 && f8 === c3 && f9 === c2) {
		
			fonction8();
			fonction2();
			fonction7();
			fonction4();
			fonction4();
			fonction7();
			fonction4();
			fonction8();
			
		
		}else if (f7 === c3 && f8 === c2 && f9 === c1) {
		
			fonction8();
			fonction2();
			fonction7();
			fonction4();
			fonction4();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f7 === c2 && f8 === c1 && f9 === c3) {
		
			fonction8();
			fonction2();
			fonction7();
			fonction4();
			fonction4();
			fonction1();
			fonction4();
			fonction4();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f10 === c1 && f11 === c2 && f12 === c3) {
		
			fonction9();
			fonction2();
			fonction10();
			fonction2();
			fonction7();
			fonction4();
			fonction8();
			
		
		}else if (f10 === c3 && f11 === c1 && f12 === c2) {
		
			fonction9();
			fonction2();
			fonction10();
			fonction2();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f10 === c2 && f11 === c3 && f12 === c1) {
		
			fonction9();
			fonction2();
			fonction10();
			fonction2();
			fonction1();
			fonction4();
			fonction4();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			fonction3();
			
		}else if (f13 === c2 && f14 === c1 && f15 === c3) {
		
			fonction7();
			fonction4();
			fonction8();
		
		}else if (f13 === c1 && f14 === c3 && f15 === c2) {
		
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f13 === c3 && f14 === c2 && f15 === c1) {
		
			fonction1();
			fonction4();
			fonction4();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f16 === c1 && f17 === c2 && f18 === c3) {
			
			fonction2();
			fonction7();
			fonction4();
			fonction8();
		
		}else if (f16 === c3 && f17 === c1 && f18 === c2) {
		
			fonction2();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f16 === c2 && f17 === c3 && f18 === c1) {
		
			fonction2();
			fonction1();
			fonction4();
			fonction4();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f19 === c1 && f20 === c2 && f21 === c3) {
		
			fonction4();
			fonction7();
			fonction4();
			fonction8();
		
		}else if (f19 === c3 && f20 === c1 && f21 === c2) {
		
			fonction4();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f19 === c2 && f20 === c3 && f21 === c1) {
		
			fonction4();
			fonction1();
			fonction4();
			fonction4();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			fonction3();

		}else if (f22 === c2 && f23 === c1 && f24 === c3) {
		
			fonction4();
			fonction4();

			fonction7();
			fonction4();
			fonction8();
		
		}else if (f22 === c1 && f23 === c3 && f24 === c2) {
		
			fonction4();
			fonction4();
			fonction1();
			fonction2();
			fonction3();
		
		}else if (f22 === c3 && f23 === c2 && f24 === c1) {
		
			fonction4();
			fonction4();
			fonction1();
			fonction4();
			fonction4();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			fonction3();

			
		}
		
	}

}

var searchArreteSecondEtage = function searchArreteSecondEtage(f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16,c1,c2, fonction1, fonction2, fonction3, fonction4, fonction5, fonction6, fonction7, fonction8, fonction9, fonction10){
	// fAT[3].color, fGT[5].color, fAT[5].color, fDT[3].color, fDT[5].color, fPT[3].color, fGT[3].color, fPT[5].color, fAT[7].color, fBT[1].color, fGT[7].color, fBT[3].color, fPT[7].color, fBT[7].color, fGT[7].color, fBT[5].color , "r", "v", tfbaigt, tfgaigt, tfbinvt, tfginvt, tfainvt, tfaaigt, tfdinvt, tfdaigt, tfpinvt, tfpaigt, 
	if (f1 !== c1 || f2 !== c2) {
		
		if(f1 === c2 && f2 === c1){
			
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction3();
			fonction5();
			fonction1(); 
			fonction6();
			
			fonction1();
			fonction1();
			
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction3();
			fonction5();
			fonction1();
			fonction6();
		}else if(f3 === c2 && f4 === c1){
			
			fonction1();
			fonction6();
			fonction3();
			fonction5();
			fonction3();
			fonction7();
			fonction1();
			fonction8();
			
			fonction3();
			fonction5();
			fonction1();
			fonction6();
			fonction1();
			fonction2();
			fonction3();
			fonction4();
		}else if(f3 === c1 && f4 === c2){
			
			fonction1();
			fonction6();
			fonction3();
			fonction5();
			fonction3();
			fonction7();
			fonction1();
			fonction8();
			
			fonction1();
			
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction3();
			fonction5();
			fonction1();
			fonction6();
		}else if(f5 === c2 && f6 === c1){
			
			fonction1();
			fonction8();
			fonction3();
			fonction7();
			fonction3();
			fonction9();
			fonction1();
			fonction10();
			
			fonction3();
			
			fonction3();
			fonction5();
			fonction1();
			fonction6();
			fonction1();
			fonction2();
			fonction3();
			fonction4();
		}else if(f5 === c1 && f6 === c2){
			
			fonction1();
			fonction8();
			fonction3();
			fonction7();
			fonction3();
			fonction9();
			fonction1();
			fonction10();
			
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction3();//1 tfbaigt, 2 tfgaigt, 3 tfbinvt,  4 tfginvt, 5 tfainvt, 6 tfaaigt,  7 tfdinvt, 8 tfdaigt,  9 tfpinvt, 10 tfpaigt, j v , v r
			fonction5();
			fonction1();
			fonction6();
			
		
		}else if(f7 === c2 && f8 === c1){
			
			fonction1();
			fonction10();
			fonction3();
			fonction9();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			
			fonction3();
			
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction3();
			fonction5();
			fonction1();
			fonction6();
		}else if(f7 === c1 && f8 === c2){
			
			fonction1();
			fonction10();
			fonction3();
			fonction9();
			fonction3();
			fonction4();
			fonction1();
			fonction2();
			
			fonction1();
			fonction1();
			
			fonction3();
			fonction5();
			fonction1();
			fonction6();
			fonction1();
			fonction2();
			fonction3();
			fonction4();
		}else if(f9 === c1 && f10 === c2){
			
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction3();
			fonction5();
			fonction1();
			fonction6();
		}else if(f9 === c2 && f10 === c1){
			
			fonction3();
			
			fonction3();
			fonction5();
			fonction1();
			fonction6();
			fonction1();
			fonction2();
			fonction3();
			fonction4();
		}else if(f11 === c1 && f12 === c2){
			
			fonction1();
			
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction3();
			fonction5();
			fonction1();
			fonction6();
		}else if(f11 === c2 && f12 === c1){
			
			fonction3();
			fonction5();
			fonction1();
			fonction6();
			fonction1();
			fonction2();
			fonction3();
			fonction4();
		}else if(f13 === c1 && f14 === c2){
			
			fonction1();
			fonction1();
			
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction3();
			fonction5();
			fonction1();
			fonction6();
		}else if(f13 === c2 && f14 === c1){
			
			fonction1();
			
			fonction3();
			fonction5();
			fonction1();
			fonction6();
			fonction1();
			fonction2();
			fonction3();
			fonction4();
		}else if(f15 === c1 && f16 === c2){
			
			fonction3();
			
			
			fonction1();
			fonction2();
			fonction3();
			fonction4();
			fonction3();
			fonction5();
			fonction1();
			fonction6();
		}else if(f15 === c2 && f16 === c1){
			
			fonction1();
			fonction1();
			
			fonction3();
			fonction5();
			fonction1();
			fonction6();
			fonction1();
			fonction2();
			fonction3();
			fonction4();
		}
	}
}

var createCroixJaune = function createCroixJaune(){
	
	while (fBT[1].color !== "j" || fBT[3].color !== "j" || fBT[5].color !== "j" || fBT[7].color !== "j"){
		if (fBT[1].color === "j" && fBT[7].color === "j") {
			
			tfgaigt();
			tfpaigt();
			tfbaigt();
			tfpinvt();
			tfbinvt();
			tfginvt();
		}else if (fBT[3].color === "j" && fBT[5].color === "j") {
			
			tfbaigt();
			tfgaigt();
			tfpaigt();
			tfbaigt();
			tfpinvt();
			tfbinvt();
			tfginvt();
		}else if (fBT[1].color === "j" && fBT[5].color === "j") {
			
			
			tfgaigt();
			tfpaigt();
			tfbaigt();
			tfpinvt();
			tfbinvt();
			tfginvt();
		}else if (fBT[5].color === "j" && fBT[7].color === "j") {
			
			tfbinvt();
			tfgaigt();
			tfbaigt();
			tfpaigt();
			tfbinvt();
			tfpinvt();
			tfginvt();
			
		}else if (fBT[7].color === "j" && fBT[3].color === "j") {
			
			tfbinvt();
			tfbinvt();
			tfgaigt();
			tfpaigt();
			tfbaigt();
			tfpinvt();
			tfbinvt();
			tfginvt();
		}else if (fBT[3].color === "j" && fBT[1].color === "j") {
			
			tfbaigt();
			tfgaigt();
			tfpaigt();
			tfbaigt();
			tfpinvt();
			tfbinvt();
			tfginvt();
		}else {
			
		
			tfgaigt();
			tfpaigt();
			tfbaigt();
			tfpinvt();
			tfbinvt();
			tfginvt();
		}
	}
	
	
}

var rangeCroixJaune = function rangeCroixJaune(){
	if (fAT[7].color !== "r" || fDT[7].color !== "ble" || fPT[7].color !== "o" || fGT[7].color !== "v" ){
		var inverseArrete = function inverseArrete(fonction1 , fonction2 , fonction3) {
			//tfdaigt, tfbaigt ,tfdinvt
			fonction1();
			fonction2();
			fonction3();
			fonction2();
			fonction1();
			fonction2();
			fonction2();
			fonction3();
			fonction2();
		
		}
		
		var e = 0;
		while (e !== 2) {
			var cA = fAT[7].color;
			var cD = fDT[7].color;
			var cP = fPT[7].color;
			var cG = fGT[7].color;
			e = 0;
			if (cA === "r"){
				e++;
			}
			if (cD === "ble"){
				e++;
			}
			if (cP === "o"){
				e++;
			}
			if (cG === "v"){
				e++;
			}
			if (e === 4) {
				
				break;
			}
			
			if (e === 2) {
				if (fAT[7].color === "r" && fPT[7].color === "o") {
			
					inverseArrete(tfpaigt, tfbaigt ,tfpinvt);
					inverseArrete(tfgaigt, tfbaigt ,tfginvt);
					
				}else if (fDT[7].color === "ble" && fGT[7].color === "v") {
					
					inverseArrete(tfdaigt, tfbaigt ,tfdinvt);
					inverseArrete(tfpaigt, tfbaigt ,tfpinvt);
			
				}
				if (fGT[7].color === "v" && fPT[7].color === "o") {
				
					inverseArrete(tfgaigt, tfbaigt ,tfginvt);
				}else if (fPT[7].color === "o" && fDT[7].color === "ble") {
				
					inverseArrete(tfpaigt, tfbaigt ,tfpinvt);
				}else if (fDT[7].color === "ble" && fAT[7].color === "r") {
				
					inverseArrete(tfdaigt, tfbaigt ,tfdinvt);
				}else if (fAT[7].color === "r" && fGT[7].color === "v") {
				
					inverseArrete(tfaaigt, tfbaigt ,tfainvt);
				}
			}else {
				tfbaigt();
			}
			
		}
		
	}
	
}


var searchCoinBas = function searchCoinBas(){
	var goodCoin = 0;
	
	if ((fBT[0].color === "j" && fAT[6].color === "r" && fGT[8].color === "v") || (fBT[0].color === "v" && fAT[6].color === "j" && fGT[8].color === "r") || (fBT[0].color === "r" && fAT[6].color === "v" && fGT[8].color === "j")) {
		
		goodCoin++;
		
	}
	if ((fBT[8].color === "j" && fPT[6].color === "o" && fDT[8].color === "ble") || (fBT[8].color === "ble" && fPT[6].color === "j" && fDT[8].color === "o") || (fBT[8].color === "o" && fPT[6].color === "ble" && fDT[8].color === "j")) {
		
		goodCoin++;

		
	}
	if ((fBT[2].color === "j" && fDT[6].color === "ble" && fAT[8].color === "r") || (fBT[2].color === "r" && fDT[6].color === "j" && fAT[8].color === "ble") || (fBT[2].color === "ble" && fDT[6].color === "r" && fAT[8].color === "j")) {
		
		goodCoin++;
	
	}
	if ((fBT[6].color === "j" && fGT[6].color === "v" && fPT[8].color === "o") || (fBT[6].color === "o" && fGT[6].color === "j" && fPT[8].color === "v") || (fBT[6].color === "v" && fGT[6].color === "o" && fPT[8].color === "j")) {
		
		goodCoin++;
		
	}
	if (goodCoin === 4){
		return;
	}
	if (goodCoin === 0) {
		tfbaigt();
		tfpaigt();
		tfbinvt();
		tfainvt();
		tfbaigt();
		tfpinvt();
		tfbinvt();
		tfaaigt();
		
	}
	if ((fBT[0].color === "j" && fAT[6].color === "r" && fGT[8].color === "v") || (fBT[0].color === "v" && fAT[6].color === "j" && fGT[8].color === "r") || (fBT[0].color === "r" && fAT[6].color === "v" && fGT[8].color === "j")) {
		
		if ((fBT[2].color === "j" && fDT[6].color === "v" && fAT[8].color === "o") || (fBT[2].color === "o" && fDT[6].color === "j" && fAT[8].color === "v") || (fBT[2].color === "v" && fDT[6].color === "o" && fAT[8].color === "j")) {
			
			tfbaigt();
			tfgaigt();
			tfbinvt();
			tfdinvt();
			tfbaigt();
			tfginvt();
			tfbinvt();
			tfdaigt();
		
		}else{
			
			tfdinvt();
			tfbaigt();
			tfgaigt();
			tfbinvt();
			tfdaigt();
			tfbaigt();
			tfginvt();
			tfbinvt();
		}
		
	}else if ((fBT[6].color === "j" && fGT[6].color === "v" && fPT[8].color === "o") || (fBT[6].color === "o" && fGT[6].color === "j" && fPT[8].color === "v") || (fBT[6].color === "v" && fGT[6].color === "o" && fPT[8].color === "j")) {

		
		if ((fBT[0].color === "j" && fAT[6].color === "o" && fGT[8].color === "ble") || (fBT[0].color === "ble" && fAT[6].color === "j" && fGT[8].color === "o") || (fBT[0].color === "o" && fAT[6].color === "ble" && fGT[8].color === "j")) {
			
			tfbaigt();
			tfpaigt();
			tfbinvt();
			tfainvt();
			tfbaigt();
			tfpinvt();
			tfbinvt();
			tfaaigt();
		
		}else{
			
			tfainvt();
			tfbaigt();
			tfpaigt();
			tfbinvt();
			tfaaigt();
			tfbaigt();
			tfpinvt();
			tfbinvt();
		}
		
	}else if ((fBT[8].color === "j" && fPT[6].color === "o" && fDT[8].color === "ble") || (fBT[8].color === "ble" && fPT[6].color === "j" && fDT[8].color === "o") || (fBT[8].color === "o" && fPT[6].color === "ble" && fDT[8].color === "j")) {

		
		if ((fBT[6].color === "j" && fGT[6].color === "ble" && fPT[8].color === "r") || (fBT[6].color === "r" && fGT[6].color === "j" && fPT[8].color === "ble") || (fBT[6].color === "ble" && fGT[6].color === "r" && fPT[8].color === "j")) {
				
			tfbaigt();
			tfdaigt();
			tfbinvt();
			tfginvt();
			tfbaigt();
			tfdinvt();
			tfbinvt();
			tfgaigt();
			
		}else{
				
			tfginvt();
			tfbaigt();
			tfdaigt();
			tfbinvt();
			tfgaigt();
			tfbaigt();
			tfdinvt();
			tfbinvt();
		}
	}else if ((fBT[2].color === "j" && fDT[6].color === "ble" && fAT[8].color === "r") || (fBT[2].color === "r" && fDT[6].color === "j" && fAT[8].color === "ble") || (fBT[2].color === "ble" && fDT[6].color === "r" && fAT[8].color === "j")) {

		
		if ((fBT[8].color === "j" && fPT[6].color === "r" && fDT[8].color === "v") || (fBT[8].color === "v" && fPT[6].color === "j" && fDT[8].color === "r") || (fBT[8].color === "r" && fPT[6].color === "v" && fDT[8].color === "j")) {
			
			tfbaigt();
			tfaaigt();
			tfbinvt();
			tfpinvt();
			tfbaigt();
			tfainvt();
			tfbinvt();
			tfpaigt();
		
		}else{
			
			tfpinvt();
			tfbaigt();
			tfaaigt();
			tfbinvt();
			tfpaigt();
			tfbaigt();
			tfainvt();
			tfbinvt();
		}
		
	}

}

var turnCoinBas = function turnCoinBas(){
	if ((fBT[0].color !== "j" && fAT[6].color !== "r" && fGT[8].color !== "v") || (fBT[8].color !== "j" && fPT[6].color !== "o" && fDT[8].color !== "ble") || (fBT[2].color !== "j" && fDT[6].color !== "ble" && fAT[8].color !== "r") || (fBT[6].color !== "j" && fGT[6].color !== "v" && fPT[8].color !== "o")) {
		while (fBT[0].color !== "j" || fAT[6].color !== "r" || fGT[8].color !== "v") {
			
			tfginvt();
			tfhinvt();
			tfgaigt();
			tfhaigt();
		}
		
		tfbaigt();
		while (fBT[0].color !== "j" || fAT[6].color !== "v" || fGT[8].color !== "o") {
			
			tfginvt();
			tfhinvt();
			tfgaigt();
			tfhaigt();
		}
		
		tfbaigt();
		while (fBT[0].color !== "j" || fAT[6].color !== "o" || fGT[8].color !== "ble") {
			
			tfginvt();
			tfhinvt();
			tfgaigt();
			tfhaigt();
		}
		
		tfbaigt();
		while (fBT[0].color !== "j" || fAT[6].color !== "ble" || fGT[8].color !== "r") {
			
			tfginvt();
			tfhinvt();
			tfgaigt();
			tfhaigt();
		}
		
		tfbaigt();	
	}
}
			
var searchC2 = function searchC2() {
	
	searchCubeCroixBlanche(fAT[1].color, fHT[7].color, fHT[3].color, fGT[1].color, fHT[5].color, fDT[1].color, fHT[1].color, fPT[1].color, fAT[3].color, fGT[5].color, fAT[5].color, fDT[3].color, fGT[3].color, fPT[5].color, fDT[5].color, fPT[3].color, fAT[7].color, fBT[1].color, fGT[7].color, fBT[3].color, fDT[7].color, fBT[5].color, fPT[7].color, fBT[7].color, "r", "bla", "v", "ble", "o", tfaaigt, tfhinvt, tfdaigt, tfhaigt, tfgaigt, tfginvt, tfdinvt, tfainvt, tfpaigt, tfbaigt, tfpinvt, tfbinvt);
	
}

var searchC10 = function searchC10() {
	
	searchCubeCroixBlanche(fGT[1].color, fHT[3].color, fHT[1].color, fPT[1].color, fHT[7].color, fAT[1].color, fHT[5].color, fDT[1].color, fGT[3].color, fPT[5].color, fGT[5].color, fAT[3].color, fPT[3].color, fDT[5].color, fAT[5].color, fDT[3].color, fGT[7].color, fBT[3].color, fPT[7].color, fBT[7].color, fAT[7].color, fBT[1].color, fDT[7].color, fBT[5].color, "v", "bla", "o", "r", "ble", tfgaigt, tfhinvt, tfaaigt, tfhaigt, tfpaigt, tfpinvt, tfainvt, tfginvt, tfdaigt, tfbaigt, tfdinvt, tfbinvt);
	
}

var searchC12 = function searchC12() {
	
	searchCubeCroixBlanche(fDT[1].color, fHT[5].color, fHT[7].color, fAT[1].color, fHT[1].color, fPT[1].color, fHT[3].color, fGT[1].color, fDT[3].color, fAT[5].color, fDT[5].color, fPT[3].color, fAT[3].color, fGT[5].color, fPT[5].color, fGT[3].color, fDT[7].color, fBT[5].color, fAT[7].color, fBT[1].color, fPT[7].color, fBT[7].color, fGT[7].color, fBT[3].color, "ble", "bla", "r", "o", "v", tfdaigt, tfhinvt, tfpaigt, tfhaigt, tfaaigt, tfainvt, tfpinvt, tfdinvt, tfgaigt, tfbaigt, tfginvt, tfbinvt);
	
}

var searchC20 = function searchC20() {
	
	searchCubeCroixBlanche(fPT[1].color, fHT[1].color, fHT[5].color, fDT[1].color, fHT[3].color, fGT[1].color, fHT[7].color, fAT[1].color, fPT[3].color, fDT[5].color, fPT[5].color, fGT[3].color, fDT[3].color, fAT[5].color, fGT[5].color, fAT[3].color, fPT[7].color, fBT[7].color, fDT[7].color, fBT[5].color, fGT[7].color, fBT[3].color, fAT[7].color, fBT[1].color, "o", "bla", "ble", "v", "r", tfpaigt, tfhinvt, tfgaigt, tfhaigt, tfdaigt, tfdinvt, tfginvt, tfpinvt, tfaaigt, tfbaigt, tfainvt, tfbinvt);

}

var searchCoin1 = function searchCoin1() {
	
	searchCoinBlanc(fHT[6].color, fAT[0].color, fGT[2].color, fHT[8].color, fAT[2].color, fDT[0].color, fHT[0].color, fPT[2].color, fGT[0].color, fHT[2].color, fPT[0].color, fDT[2].color, fAT[6].color, fGT[8].color, fBT[0].color, fAT[8].color, fDT[6].color, fBT[2].color, fPT[8].color, fGT[6].color, fBT[6].color, fPT[6].color, fDT[8].color, fBT[8].color, "bla", "r", "v", tfainvt, tfbinvt, tfaaigt, tfbaigt, tfdinvt, tfdaigt, tfgaigt, tfginvt, tfpinvt, tfpaigt);
	
}

var searchCoin3 = function searchCoin3() {
	
	searchCoinBlanc(fHT[8].color, fDT[0].color, fAT[2].color, fHT[2].color, fDT[2].color, fPT[0].color, fHT[6].color, fGT[2].color, fAT[0].color, fHT[0].color, fGT[0].color, fPT[2].color, fDT[6].color, fAT[8].color, fBT[2].color, fDT[8].color, fPT[6].color, fBT[8].color, fGT[8].color, fAT[6].color, fBT[0].color, fGT[6].color, fPT[8].color, fBT[6].color, "bla", "ble", "r", tfdinvt, tfbinvt, tfdaigt, tfbaigt, tfpinvt, tfpaigt, tfaaigt, tfainvt, tfginvt, tfgaigt);
	
}

var searchCoin19 = function searchCoin19() {
	
	searchCoinBlanc(fHT[0].color, fGT[0].color, fPT[2].color, fHT[6].color, fGT[2].color, fAT[0].color, fHT[2].color, fDT[2].color, fPT[0].color, fHT[8].color, fDT[0].color, fAT[2].color, fGT[6].color, fPT[8].color, fBT[6].color, fGT[8].color, fAT[6].color, fBT[0].color, fDT[8].color, fPT[6].color, fBT[8].color, fDT[6].color, fAT[8].color, fBT[2].color, "bla", "v", "o", tfginvt, tfbinvt, tfgaigt, tfbaigt, tfainvt, tfaaigt, tfpaigt, tfpinvt, tfdinvt, tfdaigt);
	
}

var searchCoin21 = function searchCoin21() {
	
	searchCoinBlanc(fHT[2].color, fPT[0].color, fDT[2].color, fHT[0].color, fPT[2].color, fGT[0].color, fHT[8].color, fAT[2].color, fDT[0].color, fHT[6].color, fAT[0].color, fGT[2].color, fPT[6].color, fDT[8].color, fBT[8].color, fPT[8].color, fGT[6].color, fBT[6].color, fAT[8].color, fDT[6].color, fBT[2].color, fAT[6].color, fGT[8].color, fBT[0].color, "bla", "o", "ble", tfpinvt, tfbinvt, tfpaigt, tfbaigt, tfginvt, tfgaigt, tfdaigt, tfdinvt, tfainvt, tfaaigt);

}

var searchArrete4 = function searchArrete4() {
	
	searchArreteSecondEtage(fAT[3].color, fGT[5].color, fAT[5].color, fDT[3].color, fDT[5].color, fPT[3].color, fGT[3].color, fPT[5].color, fAT[7].color, fBT[1].color, fGT[7].color, fBT[3].color, fPT[7].color, fBT[7].color, fDT[7].color, fBT[5].color , "r", "v", tfbaigt, tfgaigt, tfbinvt, tfginvt, tfainvt, tfaaigt, tfdinvt, tfdaigt, tfpinvt, tfpaigt);
	
}

var searchArrete6 = function searchArrete6() {
	
	searchArreteSecondEtage(fDT[3].color, fAT[5].color, fDT[5].color, fPT[3].color, fPT[5].color, fGT[3].color, fAT[3].color, fGT[5].color, fDT[7].color, fBT[5].color, fAT[7].color, fBT[1].color, fGT[7].color, fBT[3].color, fPT[7].color, fBT[7].color , "ble", "r", tfbaigt, tfaaigt, tfbinvt, tfainvt, tfdinvt, tfdaigt, tfpinvt, tfpaigt, tfginvt, tfgaigt);
							
}

var searchArrete22 = function searchArrete22() {
							
	searchArreteSecondEtage(fGT[3].color, fPT[5].color, fGT[5].color, fAT[3].color, fAT[5].color, fDT[3].color, fPT[3].color, fDT[5].color, fGT[7].color, fBT[3].color, fPT[7].color, fBT[7].color, fDT[7].color, fBT[5].color, fAT[7].color, fBT[1].color , "v", "o", tfbaigt, tfpaigt, tfbinvt, tfpinvt, tfginvt, tfgaigt, tfainvt, tfaaigt, tfdinvt, tfdaigt);
	
}

var searchArrete24 = function searchArrete24() {
	
	searchArreteSecondEtage(fPT[3].color, fDT[5].color, fPT[5].color, fGT[3].color, fGT[5].color, fAT[3].color, fDT[3].color, fAT[5].color, fPT[7].color, fBT[7].color, fDT[7].color, fBT[5].color, fAT[7].color, fBT[1].color, fGT[7].color, fBT[3].color , "o", "ble", tfbaigt, tfdaigt, tfbinvt, tfdinvt, tfpinvt, tfpaigt, tfginvt, tfgaigt, tfainvt, tfaaigt);

}



var listBestFunction = [];
var tableauFonction = [];
var tableauParti1 = [];
var tableauParti2 = [];
var bestResult = ["", "", "",9999999];
var chooseBestMethod = function chooseBestMethod(tableauDeResultat, tableauDeResultat2, tableauDeResultat3) {
			
	bestResult = ["", "", "", 9999999];	
	for ( var i = 0; i < tableauDeResultat.length; i++){
		reset();
		tableauFonction = [];
		tableauParti1 = [];
		for(var j = 0; j < tableauDeResultat[i].length; j++){
		
			if (tableauDeResultat[i][j] === "searchC2") {
			
				searchC2();
				
			}else if (tableauDeResultat[i][j] === "searchC10") {
			
				searchC10();
			
			}else if (tableauDeResultat[i][j] === "searchC12") {
			
				searchC12();
			
			}else if (tableauDeResultat[i][j] === "searchC20") {
			
				searchC20();
			
			}
			
		}

		sauvegarde(tableauSauvegarde1);
		for(z = 0; z < tableauFonction.length; z++){
			
			tableauParti1.push(tableauFonction[z]);

		}
		for ( var l = 0; l < tableauDeResultat2.length; l++){
			tableauParti2 = [];
			restore(tableauSauvegarde1);
			tableauFonction = [];
			
			for(y = 0; y < tableauParti1.length; y++){
			
				tableauFonction.push(tableauParti1[y]);

			}
			for(var m = 0; m < tableauDeResultat2[l].length; m++){
		
				if (tableauDeResultat2[l][m] === "searchCoin1") {
		
					searchCoin1();

		
				}else if (tableauDeResultat2[l][m] === "searchCoin3") {
		
					searchCoin3();
		
				}else if (tableauDeResultat2[l][m] === "searchCoin19") {
		
					searchCoin19();
		
				}else if (tableauDeResultat2[l][m] === "searchCoin21") {
		
					searchCoin21();
		
				}
		
			}
			
			sauvegarde(tableauSauvegarde2);
			for(z2 = 0; z2 < tableauFonction.length; z2++){
				
				tableauParti2.push(tableauFonction[z2]);

			}
			for ( var l2 = 0; l2 < tableauDeResultat3.length; l2++){
				
				restore(tableauSauvegarde2);
				tableauFonction = [];
				
				for(h2 = 0; h2 < tableauParti2.length; h2++){
				
					tableauFonction.push(tableauParti2[h2]);

				}
				for(var m2 = 0; m2 < tableauDeResultat3[l2].length; m2++){
			
					if (tableauDeResultat3[l2][m2] === "searchArrete4") {
			
						searchArrete4();

			
					}else if (tableauDeResultat3[l2][m2] === "searchArrete6") {
			
						searchArrete6();
			
					}else if (tableauDeResultat3[l2][m2] === "searchArrete22") {
			
						searchArrete22();
			
					}else if (tableauDeResultat3[l2][m2] === "searchArrete24") {
			
						searchArrete24();
			
					}
			
				}
				
				createCroixJaune(); 
				rangeCroixJaune();
				searchCoinBas();
				turnCoinBas();
				
			
				deleteUsless(tableauFonction);
				
				if ( tableauFonction.length < bestResult[3]) {
			
					bestResult[0] = tableauDeResultat[i];
					bestResult[1] = tableauDeResultat2[l];
					bestResult[2] = tableauDeResultat3[l2];
					bestResult[3] = tableauFonction.length;
					listBestFunction = [];
					for(x = 0; x < tableauFonction.length; x++){
			
						listBestFunction.push(tableauFonction[x]);
					}
				
				}	
			
			}
			
			
		}	
			
	}
	reset();		
	lunchAnimation(listBestFunction.length , listBestFunction);
	
	
	
}

//////////////////////////// Ultime resolver Alpha ////////////////////

var tableau = [0,1,2,3,4,5,6,7,8,9,10,11];
var resultat = [];
var resultatFinal = [];
var niveau = [0,0,0,0,0];
var SauvegardeResult = [];
var solution = [];



var returnAllCombinaison = function returnAllCombinaison() {
	while (niveau[0] !== tableau.length){
		
		for(i=0;i<niveau.length;i++){
			
			for(j=0;j<niveau.length;j++){
				if (i === j){
					
					resultat.push(tableau[niveau[j]]);
					if ( j === niveau.length - 1){
					
						niveau[j]++;
						for(k = (niveau.length - 1);k >= 0;k--){
					
							if (niveau[k] === tableau.length && k !== 0){
							
								niveau[k] = 0;
								niveau[k-1]++;
							
							}
							
						}
					}else{
			
						break;
					}	
				}
				
			}
			
		}
		resultatFinal.push(resultat);
		resultat = [];
	
	}
	console.log("fini");
}


function RangeResult() {
	sauvegarde(tableauSauvegarde1);
	
	for(i= 0; i< resultatFinal.length;i++){ 
		restore();
		for(j= 0; j< resultatFinal[i].length;j++){ 
			if ( resultatFinal[i][j] === 0) {
				tfaaigt();
			}else if( resultatFinal[i][j] === 1) {
				tfainvt();
			}else if( resultatFinal[i][j] === 2) {
				tfhaigt();
			}else if( resultatFinal[i][j] === 3) {
				tfhinvt();
			}else if( resultatFinal[i][j] === 4) {
				tfdaigt();
			}else if( resultatFinal[i][j] === 5) {
				tfdinvt();
			}else if( resultatFinal[i][j] === 6) {
				tfpaigt();
			}else if( resultatFinal[i][j] === 7) {
				tfpinvt();
			}else if( resultatFinal[i][j] === 8) {
				tfgaigt();
			}else if( resultatFinal[i][j] === 9) {
				tfginvt();
			}else if( resultatFinal[i][j] === 10) {
				tfbaigt();
			}else if( resultatFinal[i][j] === 11) {
				tfbinvt();
			}
		}
		
		SauvegardeResult[i] = [];
		SauvegardeResult[i][0] = fHT[0].color;
	SauvegardeResult[i][1] = fHT[1].color;
	SauvegardeResult[i][2] = fHT[2].color;
	SauvegardeResult[i][3] = fHT[3].color;
	SauvegardeResult[i][4] = fHT[5].color;
	SauvegardeResult[i][5] = fHT[6].color;
	SauvegardeResult[i][6] = fHT[7].color;
	SauvegardeResult[i][7] = fHT[8].color;
	SauvegardeResult[i][8] = fAT[0].color;
	SauvegardeResult[i][9] = fAT[1].color;
	SauvegardeResult[i][10] = fAT[2].color;
	SauvegardeResult[i][11] = fAT[3].color;
	SauvegardeResult[i][12] = fAT[5].color;
	SauvegardeResult[i][13] = fAT[6].color;
	SauvegardeResult[i][14] = fAT[7].color;
	SauvegardeResult[i][15] = fAT[8].color;
	SauvegardeResult[i][16] = fDT[0].color;
	SauvegardeResult[i][17] = fDT[1].color;
	SauvegardeResult[i][18] = fDT[2].color;
	SauvegardeResult[i][19] = fDT[3].color;
	SauvegardeResult[i][20] = fDT[5].color;
	SauvegardeResult[i][21] = fDT[6].color;
	SauvegardeResult[i][22] = fDT[7].color;
	SauvegardeResult[i][23] = fDT[8].color;
	SauvegardeResult[i][24] = fPT[0].color;
	SauvegardeResult[i][25] = fPT[1].color;
	SauvegardeResult[i][26] = fPT[2].color;
	SauvegardeResult[i][27] = fPT[3].color;
	SauvegardeResult[i][28] = fPT[5].color;
	SauvegardeResult[i][29] = fPT[6].color;
	SauvegardeResult[i][30] = fPT[7].color;
	SauvegardeResult[i][31] = fPT[8].color;
	SauvegardeResult[i][32] = fGT[0].color;
	SauvegardeResult[i][33] = fGT[1].color;
	SauvegardeResult[i][34] = fGT[2].color;
	SauvegardeResult[i][35] = fGT[3].color;
	SauvegardeResult[i][36] = fGT[5].color;
	SauvegardeResult[i][37] = fGT[6].color;
	SauvegardeResult[i][38] = fGT[7].color;
	SauvegardeResult[i][39] = fGT[8].color;
	SauvegardeResult[i][40] = fBT[0].color;
	SauvegardeResult[i][41] = fBT[1].color;
	SauvegardeResult[i][42] = fBT[2].color;
	SauvegardeResult[i][43] = fBT[3].color;
	SauvegardeResult[i][44] = fBT[5].color;
	SauvegardeResult[i][45] = fBT[6].color;
	SauvegardeResult[i][46] = fBT[7].color;
	SauvegardeResult[i][47] = fBT[8].color;
	}
	console.log("Fini !!");

}

function retrouve(){
	reset();
	solution = [];
	var tabCompare = [];
	tabCompare[0] = fHT[0].color;
	tabCompare[1] = fHT[1].color;
	tabCompare[2] = fHT[2].color;
	tabCompare[3] = fHT[3].color;
	tabCompare[4] = fHT[5].color;
	tabCompare[5] = fHT[6].color;
	tabCompare[6] = fHT[7].color;
	tabCompare[7] = fHT[8].color;
	tabCompare[8] = fAT[0].color;
	tabCompare[9] = fAT[1].color;
	tabCompare[10] = fAT[2].color;
	tabCompare[11] = fAT[3].color;
	tabCompare[12] = fAT[5].color;
	tabCompare[13] = fAT[6].color;
	tabCompare[14] = fAT[7].color;
	tabCompare[15] = fAT[8].color;
	tabCompare[16] = fDT[0].color;
	tabCompare[17] = fDT[1].color;
	tabCompare[18] = fDT[2].color;
	tabCompare[19] = fDT[3].color;
	tabCompare[20] = fDT[5].color;
	tabCompare[21] = fDT[6].color;
	tabCompare[22] = fDT[7].color;
	tabCompare[23] = fDT[8].color;
	tabCompare[24] = fPT[0].color;
	tabCompare[25] = fPT[1].color;
	tabCompare[26] = fPT[2].color;
	tabCompare[27] = fPT[3].color;
	tabCompare[28] = fPT[5].color;
	tabCompare[29] = fPT[6].color;
	tabCompare[30] = fPT[7].color;
	tabCompare[31] = fPT[8].color;
	tabCompare[32] = fGT[0].color;
	tabCompare[33] = fGT[1].color;
	tabCompare[34] = fGT[2].color;
	tabCompare[35] = fGT[3].color;
	tabCompare[36] = fGT[5].color;
	tabCompare[37] = fGT[6].color;
	tabCompare[38] = fGT[7].color;
	tabCompare[39] = fGT[8].color;
	tabCompare[40] = fBT[0].color;
	tabCompare[41] = fBT[1].color;
	tabCompare[42] = fBT[2].color;
	tabCompare[43] = fBT[3].color;
	tabCompare[44] = fBT[5].color;
	tabCompare[45] = fBT[6].color;
	tabCompare[46] = fBT[7].color;
	tabCompare[47] = fBT[8].color;
	for (i=0; i< resultatFinal.length; i++){
	var ok = true;
			for (i1=0; i1< SauvegardeResult[i].length; i1++){
				if ( SauvegardeResult[i][i1] === tabCompare[i1]){
					continue;
				}else{
					ok = false;
					break;
				}
			}
			if (ok){
				for (k = resultatFinal[i].length - 1; k >= 0; k--){
					if (resultatFinal[i][k] === 0) {
						solution.push(tfainv);
					}else if (resultatFinal[i][k] === 1) {
						solution.push(tfaaig);
					}else if (resultatFinal[i][k] === 2) {
						solution.push(tfhinv);
					}else if (resultatFinal[i][k] === 3) {
						solution.push(tfhaig);
					}else if (resultatFinal[i][k] === 4) {
						solution.push(tfdinv);
					}else if (resultatFinal[i][k] === 5) {
						solution.push(tfdaig);
					}else if (resultatFinal[i][k] === 6) {
						solution.push(tfpinv);
					}else if (resultatFinal[i][k] === 7) {
						solution.push(tfpaig);
					}else if (resultatFinal[i][k] === 8) {
						solution.push(tfginv);
					}else if (resultatFinal[i][k] === 9) {
						solution.push(tfgaig);
					}else if (resultatFinal[i][k] === 10) {
						solution.push(tfbinv);
					}else if (resultatFinal[i][k] === 11) {
						solution.push(tfbaig);
					}
				}
				i = resultatFinal.length;
			}
		
	}
	lunchAnimation(solution.length, solution);

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


////////////// fonction de rotation des faces avec le doigt. 


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

var m = function m(){
	lunchAnimation(tablol.length, tablol);
}

function augmenteVitesse() {

	if (vitesse < 6) {
		vitesse++;
		ms -= 500;
		infoVitesse.textContent = "Vitesse d'animation : " + vitesse;
	}
}

function diminueVitesse() {

	if (vitesse > 1) {
		vitesse--;
		ms += 500;
		infoVitesse.textContent = "Vitesse d'animation : " +  vitesse;
	}
}
