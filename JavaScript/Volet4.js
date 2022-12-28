function supprimer(elt){

    elt.parentNode.parentNode.parentNode.removeChild(elt.parentNode.parentNode);  
}

function modifier(elt){
    var nouvelleDescription = prompt("Nouvelle Description :");
    var ligne = elt.parentNode.parentNode.childNodes;
    var AncienneDescription = ligne[3];

    AncienneDescription.innerText = nouvelleDescription;
}

function AjouterNouvelleElement(){
//si l'utilisateur clique sur le boutton ajouter situer a la fin de la tableau on affiche le formulaire et on cache tout les equipes
    var quatartb = document.getElementById("Quatartb");
    var paysbastb = document.getElementById('PaysBastb');
    var englandtb = document.getElementById('Englandtb');
    var usatb = document.getElementById('Usatb');
    var maroctb = document.getElementById('Maroctb');
    var classement = document.getElementById('classement');    

    quatartb.style.display = "none";
    paysbastb.style.display = "none";
    englandtb.style.display = "none";
    usatb.style.display = "none";
    maroctb.style.display = "none"
    classement.style.display = "none";

    var form = document.getElementById('formulairedAjout');

    form.style.display = "block";
}

function ajouetrJoueur(){

    var form = document.getElementById('formulairedAjout');
    var divquatar = document.getElementById('Quatartb');
    var imguploaded = document.getElementById('aaa');
    var classement = document.getElementById('classement');  
    classement.style.display = "none";
    
    var description = document.getElementById('descriptioninput');
//creation des boutons par la methode createlement 
    var suppbtn = document.createElement('button');
    var editbtn = document.createElement('button');
//style des nouveau bouton ajouter
    suppbtn.style.backgroundColor = '#273157';
    editbtn.style.backgroundColor = '#273157';

    suppbtn.style.border = 'none';
    editbtn.style.border = 'none';

    suppbtn.style.color = 'white';
    editbtn.style.color = 'white';

    suppbtn.style.padding = '10px';
    editbtn.style.padding = '10px';

    suppbtn.innerHTML = "Supprimer";
    editbtn.innerHTML = "Editer";
//this refere au nouveau boutton ajouter
    editbtn.onclick = function(){
        var nouvelleDescription = prompt("Nouvelle Description :");
        var ligne = this.parentNode.parentNode.childNodes;
        var AncienneDescription = ligne[1];
    
        AncienneDescription.innerText = nouvelleDescription;
    };
    
    suppbtn.onclick = function(){
        //this refere au boutton supp
        //donc this.parentNode ==> td contenant le boutton cliquer
        //et this.parentNode.parentNode ==> tr contenant le boutton cliquer
        //removeChild(arg) prend comme argument le td contenant le boutton cliquer 
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);  
    };
    //creation les element de la nouvelle ligne
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    
    var img = document.createElement('img');
    img.src = imguploaded.value;
    
    //il y 5 cas selon le choix de l'utilisateur si il choisis l'equipe quatar par input[type=radio] on ajouter une nouvelle 
    //ligne dans le tableau Quatar et on cache le formulaire et on affiche l'equipe selectionner.
    if(document.getElementById('quatarcheck').checked == true){
        //chaque tr a 5 Child , 1er td content l'image,2eme td contenant la description,3eme,4eme et 5eme tds contient les boutton supprimer et editer et modifier
        var tableauQuatar = document.getElementById("tbQuatar");
        tableauQuatar.appendChild(tr);
        
        td1.appendChild(img);
        tr.appendChild(td1);

        td2.innerHTML = description.value;
        tr.appendChild(td2);


        td4.appendChild(editbtn);
        tr.appendChild(td4);

        td5.appendChild(suppbtn);
        tr.appendChild(td5);

        form.style.display = "none";
        divquatar.style.display = "block";
    }
    else if(document.getElementById('paysbascheck').checked == true){


        var tableauPaysBas = document.getElementById("paysbastableau");
        tableauPaysBas.appendChild(tr);
        
        td1.appendChild(img);
        tr.appendChild(td1);

        td2.innerHTML = description.value;
        tr.appendChild(td2);


        td4.appendChild(editbtn);
        tr.appendChild(td4);

        td5.appendChild(suppbtn);
        tr.appendChild(td5);

        form.style.display = "none";
        PaysBastb.style.display = "block";
    }
    else if(document.getElementById('englandcheck').checked == true){

        var tableauEngland = document.getElementById("englandtableau");
        tableauEngland.appendChild(tr);
        
        td1.appendChild(img);
        tr.appendChild(td1);

        td2.innerHTML = description.value;
        tr.appendChild(td2);



        td4.appendChild(editbtn);
        tr.appendChild(td4);

        td5.appendChild(suppbtn);
        tr.appendChild(td5);

        form.style.display = "none";
        Englandtb.style.display = "block";
    }
    else if(document.getElementById('usacheck').checked == true){

        var tableauUsa = document.getElementById("usaTableau");
        tableauUsa.appendChild(tr);
        
        td1.appendChild(img);
        tr.appendChild(td1);

        td2.innerHTML = description.value;
        tr.appendChild(td2);



        td4.appendChild(editbtn);
        tr.appendChild(td4);

        td5.appendChild(suppbtn);
        tr.appendChild(td5);

        form.style.display = "none";
        Usatb.style.display = "block";
    }
    if(document.getElementById('maroccheck').checked == true){

        var tableauTableau = document.getElementById("marocTableau");
        tableauTableau.appendChild(tr);
        
        td1.appendChild(img);
        tr.appendChild(td1);

        td2.innerHTML = description.value;
        tr.appendChild(td2);


        td4.appendChild(editbtn);
        tr.appendChild(td4);

        td5.appendChild(suppbtn);
        tr.appendChild(td5);

        form.style.display = "none";
        Maroctb.style.display = "block";
    }


}
