
//si l'utilisateur cliqhe sur un groupe on l'affiche avec display: block; et on cache tous les equipe avec display:none;

//declarer les variables globales si et seulement si le DOM est ready et dans le cas contraire les variables vont etre toujours null
window.addEventListener("DOMContentLoaded" , (event) =>{
    grpA = document.getElementById('grpA');
    grpB = document.getElementById('grpB');
    grpC = document.getElementById('grpC');
    grpD = document.getElementById('grpD');
    grpE = document.getElementById('grpE');
    grpF = document.getElementById('grpF');
    grpG = document.getElementById('grpG');
    grpH = document.getElementById('grpH');
    volet2345 = document.getElementById('div2');
});

function afficherGrpA(){

    volet2345.style.visibility ="visible";
    grpA.style.display = "block";
    grpB.style.display = "none";
    grpC.style.display = "none";
    grpD.style.display = "none";
    grpE.style.display = "none";
    grpF.style.display = "none";
    grpG.style.display = "none";
    grpH.style.display = "none";
}
//la même chose pour les autres
function afficherGrpB(){
    volet2345.style.visibility ="visible";

    grpA.style.display = "none";
    grpB.style.display = "block";
    grpC.style.display = "none";
    grpD.style.display = "none";
    grpE.style.display = "none";
    grpF.style.display = "none";
    grpG.style.display = "none";
    grpH.style.display = "none";
}
function afficherGrpC(){
    volet2345.style.visibility ="visible";

    grpA.style.display = "none";
    grpB.style.display = "none";
    grpC.style.display = "block";
    grpD.style.display = "none";
    grpE.style.display = "none";
    grpF.style.display = "none";
    grpG.style.display = "none";
    grpH.style.display = "none";
}
function afficherGrpD(){
    volet2345.style.visibility ="visible";

    grpA.style.display = "none";
    grpB.style.display = "none";
    grpC.style.display = "none";
    grpD.style.display = "block";
    grpE.style.display = "none";
    grpF.style.display = "none";
    grpG.style.display = "none";
    grpH.style.display = "none";
}
function afficherGrpE(){
    volet2345.style.visibility ="visible";

    grpA.style.display = "none";
    grpB.style.display = "none";
    grpC.style.display = "none";
    grpD.style.display = "none";
    grpE.style.display = "block";
    grpF.style.display = "none";
    grpG.style.display = "none";
    grpH.style.display = "none";
}
function afficherGrpF(){
    volet2345.style.visibility ="visible";

    grpA.style.display = "none";
    grpB.style.display = "none";
    grpC.style.display = "none";
    grpD.style.display = "none";
    grpE.style.display = "none";
    grpF.style.display = "block";
    grpG.style.display = "none";
    grpH.style.display = "none";
}
function afficherGrpG(){
    volet2345.style.visibility ="visible";

    grpA.style.display = "none";
    grpB.style.display = "none";
    grpC.style.display = "none";
    grpD.style.display = "none";
    grpE.style.display = "none";
    grpF.style.display = "none";
    grpG.style.display = "block";
    grpH.style.display = "none";
}
function afficherGrpH(){
    volet2345.style.visibility ="visible";
    grpA.style.display = "none";
    grpB.style.display = "none";
    grpC.style.display = "none";
    grpD.style.display = "none";
    grpE.style.display = "none";
    grpF.style.display = "none";
    grpG.style.display = "none";
    grpH.style.display = "block";
}




