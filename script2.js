var tableau = [0,1,2];
var resultat = [];
var tableauResultat =[];

function returnAllCombinaison(tableau, niveau){

	
	if (resultat.length = (niveau)){ 
		
		tableauResultat.push(resultat);
		resultat = [];
		
	}else {
	
		for(i=0;i<tableau.length;i++){
			
			resultat.push(tableau[i]);
			returnallcombinaison(tableau, niveau)
	
		}
		
	}
	
}

returnAllCombinaison(tableau, 4);
console.log(tableauResultat);