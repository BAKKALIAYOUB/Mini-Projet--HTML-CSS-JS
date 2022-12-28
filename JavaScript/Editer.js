function modifier(elt){
    var FTyousofhassan = document.getElementById('Yousofhassan');
    var paysyoussofHassan = document.querySelector('#Yousofhassan #pays');
    var ageyousofHassan = document.querySelector('#Yousofhassan #age');
    var datedenaissanceyousofHassan = document.querySelector('#Yousofhassan #datedenaissance');
    var lieuyousofHassan = document.querySelector('#Yousofhassan #lieu');
    var tailleyousofHassan = document.querySelector('#Yousofhassan #taille');
    var poidsyousofHassan = document.querySelector('#Yousofhassan #poids');

    var paystariksalman = document.querySelector('#TarikSalman #pays');
    var agetariksalman = document.querySelector('#TarikSalman #age');
    var datedenaissancetariksalman = document.querySelector('#TarikSalman #datedenaissance');
    var lieutariksalman = document.querySelector('#TarikSalman #lieu');
    var tailletariksalman = document.querySelector('#TarikSalman #taille');
    var poidstariksalman = document.querySelector('#TarikSalman #poids');

    var paysMussabKadir = document.querySelector('#MussabKadir #pays');
    var ageMussabKadir = document.querySelector('#MussabKadir #age');
    var datedenaissanceMussabKadir = document.querySelector('#MussabKadir #datedenaissance');
    var tailleMussabKadir = document.querySelector('#MussabKadir #taille');
    var poidsMussabKadir = document.querySelector('#MussabKadir #poids');

    var paysPasveer = document.querySelector('#MussabKadir #pays');
    var agePasveer = document.querySelector('#MussabKadir #age');
    var datedenaissancePasveer = document.querySelector('#MussabKadir #datedenaissance');
    var lieuPasveer = document.querySelector('#Pasveer #lieu');
    var taillePasveer = document.querySelector('#MussabKadir #taille');
    var poidsPasveer = document.querySelector('#MussabKadir #poids');

    var paysAke = document.querySelector('#Ake #pays');
    var ageAke = document.querySelector('#Ake #age');
    var datedenaissanceAke = document.querySelector('#Ake #datedenaissance');
    var lieuAke = document.querySelector('#Pasveer #lieu');
    var tailleAke = document.querySelector('#Ake #taille');
    var poidsAke = document.querySelector('#Ake #poids');

    if(elt.parentNode.id == "Yousofhassan"){
        var NVpays1 = prompt('Pays :');
        var NVage1 = prompt('Age :');
        var NVdatedenaissance1 = prompt('Date de Naissance');
        var NVlieu1 = prompt('Lieu : ');
        var NVTaille1 = prompt('Taille : ');
        var NVPoids1 = prompt('Poids :');

        paysyoussofHassan.innerHTML = NVpays1;
        ageyousofHassan.innerHTML = NVage1;
        datedenaissanceyousofHassan.innerHTML = NVdatedenaissance1;
        lieuyousofHassan.innerHTML = NVlieu1;
        tailleyousofHassan.innerHTML = NVTaille1;
        poidsyousofHassan.innerHTML = NVPoids1;
        AfficherYousofhassan();
    }
    if(elt.parentNode.id == "TarikSalman"){
        var NVpays2 = prompt('Pays :');
        var NVage2 = prompt('Age :');
        var NVdatedenaissance2 = prompt('Date de Naissance');
        var NVlieu2 = prompt('Lieu : ');
        var NVTaille2 = prompt('Taille : ');
        var NVPoids2 = prompt('Poids :');

        paystariksalman.innerHTML = NVpays2;
        agetariksalman.innerHTML = NVage2;
        datedenaissancetariksalman.innerHTML = NVdatedenaissance2;
        lieutariksalman.innerHTML = NVlieu2;
        tailletariksalman.innerHTML = NVTaille2;
        poidstariksalman.innerHTML = NVPoids2;
        AfficherTarickSalman();
    }
    if(elt.parentNode.id == "MussabKadir"){
        var NVpays3 = prompt('Pays :');
        var NVage3 = prompt('Age :');
        var NVdatedenaissance3 = prompt('Date de Naissance');
        var NVlieu3 = prompt('Lieu : ');
        var NVTaille3 = prompt('Taille : ');
        var NVPoids3 = prompt('Poids :');

        paysMussabKadir.innerHTML = NVpays3;
        ageMussabKadir.innerHTML = NVage3;
        datedenaissanceMussabKadir.innerHTML = NVdatedenaissance3;
        tailleMussabKadir.innerHTML = NVTaille3;
        poidsMussabKadir.innerHTML = NVPoids3;

        AfficherMussabKadir();
    }
    if(elt.parentNode.id == "Pasveer"){
        var NVpays4 = prompt('Pays :');
        var NVage4 = prompt('Age :');
        var NVdatedenaissance4 = prompt('Date de Naissance');
        var NVlieu4 = prompt('Lieu : ');
        var NVTaille4 = prompt('Taille : ');
        var NVPoids4 = prompt('Poids :');

        paysPasveer.innerHTML = NVpays4;
        agePasveer.innerHTML = NVage4;
        datedenaissancePasveer.innerHTML = NVdatedenaissance4;
        lieuPasveer.innerHTML = NVlieu4;
        taillePasveer.innerHTML = NVTaille4;
        poidsPasveer.innerHTML = NVPoids4;

        AfficherPasveer();
    }
    if(elt.parentNode.id == "Ake"){
        var NVpays5 = prompt('Pays :');
        var NVage5 = prompt('Age :');
        var NVdatedenaissance5 = prompt('Date de Naissance');
        var NVlieu5 = prompt('Lieu : ');
        var NVTaille5 = prompt('Taille : ');
        var NVPoids5 = prompt('Poids :');

        paysAke.innerHTML = NVpays5;
        ageAke.innerHTML = NVage5;
        datedenaissanceAke.innerHTML = NVdatedenaissance5;
        lieuAke.innerHTML = NVlieu5;
        tailleAke.innerHTML = NVTaille5;
        poidsAke.innerHTML = NVPoids5;

        AfficherAke();
    }    
    
}