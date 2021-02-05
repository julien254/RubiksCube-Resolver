
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


var check = true;
var ready = true

function switchCube() {

  if (check && ready) {

    container.style.transition =  "transform 2s ease";
    container.style.transform =  "rotateY(-47deg) rotateX(180deg)";
    check = false;
    ready = false;
    setTimeout(function() {ready = true;}, 2000);

  } else if (ready){

    container.style.transform =  "rotateY(-47deg) rotateX(360deg)";
    ready = false;
    setTimeout(function() {

        container.style.transition =  "none";
        container.style.transform =  "rotateY(-47deg) rotateX(0deg)";
        check = true;
        ready = true;

    }, 2000);

  }

}


//if ("serviceWorker" in navigator) {
//  // On essaye d'enregistrer le service
//  // worker
//  navigator.serviceWorker
//  .register("service-worker.js")
//    .then(registration => {
//      // Le Service Worker a fini d'être
//      // téléchargé.
//      console.log("App: Téléchargement fini.");
//
//      registration.addEventListener("updatefound", () => {
//        // On récupère le Service
//        // Worker en cours
//        // d'installation
//        const newWorker = registration.installing;
//        // `registration` a aussi
//        // les clés `active` et
//        // `waiting` qui permettent
//        // de récupérer les Service
//        // Workers correspondant
//
//        newWorker.addEventListener("statechange", () => {
//          // Le service worker a
//          // changé d'état
//          console.log("App: Nouvel état :", newWorker.state);
//        });
//      });
//    })
//    .catch(err => {
//      // Il y a eu un problème
//      console.error("Y'a une couille dans le paté", err);
//    });
//}
