/*Le volet 5 contient deux div le 1er div contient les actualites avec un lien et il est toujours afficher, le 2emme div contient
les detailles des actualites mais afficher si l'utilisateurs clique sur le lien. */

function afficherDetail1(){
    var details = document.getElementById("detailsActualite");

    var detail1 = document.getElementById("detail1");
    var detail2 = document.getElementById('detail2');

    var lien1 = document.getElementById('a1');
    var lien2 = document.getElementById('a2');

    var ads1 = document.getElementById('ads1');

    if(lien1.innerText == 'Plus...'){
        details.style.display = 'block';
        detail2.style.display = 'none'
        detail1.style.display = 'block';
        lien1.innerText = "Moins...";
        lien2.innerText = "Plus..."
        ads1.style.display = "none";
    }
    else{
        details.style.display = 'none';
        lien1.innerText = 'Plus...'
    }
}

//même chose que la fonction precèdante
function afficherDetail2(){

    var details = document.getElementById("detailsActualite");

    var detail1 = document.getElementById("detail1");
    var detail2 = document.getElementById('detail2');

    var lien1 = document.getElementById('a1');
    var lien2 = document.getElementById('a2');

    var ads1 = document.getElementById('ads1');

    if(lien2.innerText == 'Plus...'){
            details.style.display = 'block';
            detail2.style.display = 'block';
            detail1.style.display = 'none';
            lien2.innerText = 'Moins...'
            lien1.innerText = "Plus..."
            ads1.style.display = "none";
    }
    else{
        details.style.display = 'none';
        lien2.innerText = "Plus...";
    }
}