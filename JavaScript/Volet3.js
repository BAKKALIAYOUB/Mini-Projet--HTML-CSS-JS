window.addEventListener('DOMContentLoaded'  ,(event) => {
    quatarVolet3 = document.getElementById('quatar');
    paybasVolet3  = document.getElementById('paysbas');
    englandVolet3 = document.getElementById('england');
    usaVolet3 = document.getElementById('usa');
    marocVolet3 = document.getElementById('maroc');

    quatartb = document.getElementById("Quatartb");
    paysbastb = document.getElementById('PaysBastb');
    englandtb = document.getElementById('Englandtb');
    usatb = document.getElementById('Usatb');
    maroctb = document.getElementById('Maroctb');
    
    formulairedAjout = document.getElementById("formulairedAjout");
    Players = document.getElementById('Players');
    classement = document.getElementById('classement');

    Matchs = document.getElementById('Matchs');
    ft = document.getElementById('FicheTechnique');
    lestableauEquipe = document.getElementById('lestableauEquipe');
});

function afficherimgQuatar(){
    lestableauEquipe.style.display = "block";
    classement.style.display = "none";
    Matchs.style.display = "none";
    ft.style.display = "none";

    //disparaitre le tableau de classement
    //apparaitre le div Players qui contient le tableau des joueur
    //et afficher juste le tableau d'equipe que l'utilisateur a clique
    Players.style.display = "block";

    quatartb.style.display = "block";
    paysbastb.style.display = "none";
    englandtb.style.display = "none";
    usatb.style.display = "none";
    maroctb.style.display = "none"

        
    quatarVolet3.style.display = "block";
    paybasVolet3.style.display = "none";
    englandVolet3.style.display = "none";
    usaVolet3.style.display = "none";
    marocVolet3.style.display = "none";
   

    //disparaitre le formulaire d'ajout d'un nouvelle joueur
    formulairedAjout.style.display = "none";
}

function afficherimgPaysBas(){
    lestableauEquipe.style.display = "block";
    classement.style.display = "none";
    Matchs.style.display = "none";
    ft.style.display = "none";

    //disparaitre le tableau de classement
    classement.style.display = "none";
    //apparaitre le div Players qui contient le tableau des joueur
    //et afficher juste le tableau d'equipe que l'utilisateur a clique
    Players.style.display = "block";

   quatartb.style.display = "none";
   paysbastb.style.display = "block";
   englandtb.style.display = "none";
   usatb.style.display = "none";
   maroctb.style.display = "none"

    
    quatarVolet3.style.display = "none";
    paybasVolet3.style.display = "block";
    englandVolet3.style.display = "none";
    usaVolet3.style.display = "none";
    marocVolet3.style.display = "none";

    //disparaitre le formulaire d'ajout d'un nouvelle joueur
    formulairedAjout.style.display = "none";
}

function afficherimgEngland(){
    lestableauEquipe.style.display = "block";
    classement.style.display = "none";
    Matchs.style.display = "none";
    ft.style.display = "none";

    //disparaitre le tableau de classement
    classement.style.display = "none";
    //apparaitre le div Players qui contient le tableau des joueur
    //et afficher juste le tableau d'equipe que l'utilisateur a clique
    Players.style.display = "block";

   quatartb.style.display = "none";
   paysbastb.style.display = "none";
   englandtb.style.display = "block";
   usatb.style.display = "none";
   maroctb.style.display = "none"
    


    quatarVolet3.style.display = "none";
    paybasVolet3.style.display = "none";
    englandVolet3.style.display = "block";
    usaVolet3.style.display = "none";
    marocVolet3.style.display = "none";

    //disparaitre le formulaire d'ajout d'un nouvelle joueur
    formulairedAjout.style.display = "none";
}

function afficherimgUsa(){
    lestableauEquipe.style.display = "block";
    classement.style.display = "none";
    Matchs.style.display = "none";
    ft.style.display = "none";


    //disparaitre le tableau de classement
    classement.style.display = "none";
    //apparaitre le div Players qui contient le tableau des joueur
    //et afficher juste le tableau d'equipe que l'utilisateur a clique
    Players.style.display = "block";

   quatartb.style.display = "none";
   paysbastb.style.display = "none";
   englandtb.style.display = "none";
   usatb.style.display = "block";
   maroctb.style.display = "none"

    
    quatarVolet3.style.display = "none";
    paybasVolet3.style.display = "none";
    englandVolet3.style.display = "none";
    usaVolet3.style.display = "block";
    marocVolet3.style.display = "none";

    //disparaitre le formulaire d'ajout d'un nouvelle joueur
    formulairedAjout.style.display = "none";
}

function afficherimgArgentina(){
    lestableauEquipe.style.display = "block";
    classement.style.display = "none";
    Matchs.style.display = "none";
    ft.style.display = "none";

    //disparaitre le tableau de classement
    classement.style.display = "none";
    //apparaitre le div Players qui contient le tableau des joueur
    //et afficher juste le tableau d'equipe que l'utilisateur a clique
    Players.style.display = "block";

    
    quatarVolet3.style.display = "none";
    paybasVolet3.style.display = "none";
    englandVolet3.style.display = "none";
    usaVolet3.style.display = "none";
    marocVolet3.style.display = "none";

    //disparaitre le formulaire d'ajout d'un nouvelle joueur
    formulairedAjout.style.display = "none";
}

function afficherimgMaroc(){
    lestableauEquipe.style.display = "block";
    classement.style.display = "none";
    Matchs.style.display = "none";
    ft.style.display = "none";

    //disparaitre le tableau de classement
    classement.style.display = "none";
    //apparaitre le div Players qui contient le tableau des joueur
    //et afficher juste le tableau d'equipe que l'utilisateur a clique
    Players.style.display = "block";

   quatartb.style.display = "none";
   paysbastb.style.display = "none";
   englandtb.style.display = "none";
   usatb.style.display = "none";
   maroctb.style.display = "block"

    
    quatarVolet3.style.display = "none";
    paybasVolet3.style.display = "none";
    englandVolet3.style.display = "none";
    usaVolet3.style.display = "none";
    marocVolet3.style.display = "block";

    //disparaitre le formulaire d'ajout d'un nouvelle joueur
    formulairedAjout.style.display = "none";
}
