//un click sur le boutton readmore affiche le reste de classement et changer innerText du boutton en readless
function readmore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if ( btnText.innerText==="read more") {
    btnText.innerText="read less";
    moreText.style.display="block";
   
  } else {
   btnText.innerText="read more";
   moreText.style.display="none";

  }
}

//Un click sur le menu classement afficher le div classement dans le volet4 et ffait disparaitre tout les autres div (Formulaire d'ajout-tableau des joueurs-fiche technique..)
function AfficherClassement(){
  var classement = document.getElementById('classement');
  var formulaire = document.getElementById('formulairedAjout');
  var players = document.getElementById('Players');
  var volet2345 = document.getElementById('div2');
  var Matchs = document.getElementById('Matchs');
  var ft = document.getElementById('FicheTechnique');

  ft.style.display = "none";
  volet2345.style.visibility = "visible";
  classement.style.display = "block";
  formulaire.style.display = "none";
  players.style.display = "none";
  Matchs.style.display = "none";
}
