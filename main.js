let body = document.body;
console.log(body);

//1 
let myDivContent = document.querySelector('div#content');
let monTitreContent = document.createElement('h2');

monTitreContent.innerText = "Part 6 - exercice 1";
myDivContent.appendChild(monTitreContent);

//2 
let monPara = document.createElement('p');
monPara.innerText = "lorem ipsum doloris bblabla lorem ipsum doloris ";

myDivContent.appendChild(monPara)

//3
let monTitreH1 = document.createElement('h1');
monTitreH1.innerText = "Le DOM - Création de HTML";

myDivContent.insertBefore(monTitreH1,  monTitreContent);
//2e methode
myDivContent.prepend(monTitreContent);

//4
let contenuId = myDivContent.innerHTML
let divSecond = document.querySelector('div#secondaire');

divSecond.innerHTML = contenuId
divSecond.querySelector('h2').innerText = 'part 6 - exercice 2'

//5
let monScript = document.querySelector('script')

let divMatiere = document.createElement("div");
divMatiere.setAttribute('id', "matiere")
body.insertBefore(divMatiere, monScript);
let monTitreListe = document.createElement('h2')
monTitreListe.innerText = "Ma liste "
divMatiere.appendChild(monTitreListe)

let listeOl = document.createElement('ol')
divMatiere.appendChild(listeOl)

let liUn = document.createElement('li')
liUn.innerText = "Javascript"
let liDeux = document.createElement('li')
liDeux.innerText = "HTML"
let liTrois = document.createElement('li')
liTrois.innerText = " DOM"

listeOl.append(liUn, liDeux, liTrois)

