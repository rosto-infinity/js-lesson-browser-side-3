//--------------join(): 
//La méthode join() crée et retourne une chaîne de caractères en combinant tous les éléments d'un tableau avec un séparateur spécifié.


//----------Exemple:


const fruits1 = ["banane", "pomme", "poire"];
// console.log(fruits1);
const fruitsList = fruits1.join("-");
// console.log(fruitsList); // affiche "banane, pomme, poire"


//------map():
// La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau d'origine.


//--Exemple:


const nombres01 = [1, 12, 6, 5 ];
const doubles = nombres01.map(x => x + 2);
// console.log(doubles); // affiche [2, 4, 6]

//--------------shift():
// Cette méthode supprime le premier élément d'un tableau et renvoie cet élément.

//--Exemple:
const array1 = [1, 2, 3];
// console.log(array1);
const firstElement = array1.shift();
// console.log(firstElement); // 1
// console.log(array1); // [2, 3]



//------------pop():-----------------
// La méthode pop() supprime le dernier élément d'un tableau et renvoie cet élément.


//--Exemple:


const nombres05 = [1, 2, 3, 4];
const dernierNombre = nombres05.pop();
//  console.log(dernierNombre); // affiche 4
 console.log(nombres05);




//---------filter():
// La méthode filter() crée un nouveau tableau contenant tous les éléments du tableau d'origine qui passent un test spécifié sous forme de fonction.


//--Exemple:


const nombres02 = [1, 2, 3, 4, 5];
const nombresPairs = nombres02.filter(x => x % 2 === 0);
// console.log(nombresPairs); // affiche [2, 4]


//---------sort():------------
// La méthode sort() trie les éléments d'un tableau selon un ordre spécifié.


//--Exemple:


const fruits = ["banane", "pomme", "poire"];
fruits.sort();
// console.log(fruits); // affiche ["banane", "poire", "pomme"]


//------------push():-------------------
// La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et renvoie la nouvelle longueur du tableau.


//--Exemple:


const nombres03 = [1, 2, 3];
nombres03.push(4);
// console.log(nombres03); // affiche [1, 2, 3, 4]


//----------reduce():----------------
// La méthode reduce() réduit les éléments d'un tableau à une seule valeur en appliquant une fonction fournie de gauche à droite.


//--Exemple:


const nombres04 = [1, 2, 3, 4, 5];
const somme = nombres04.reduce((total, valeur) => total + valeur);
//  console.log(somme); // affiche 15 (1 + 2 + 3 + 4 + 5)







//-----------slice():-------------------
// La méthode slice() renvoie une copie d'une partie d'un tableau spécifié en fonction des indices de début et de fin.


//--Exemple:


const nombres = [1, 2, 3, 4, 5];
const sousTableau = nombres.slice(1, 4);
//  console.log(sousTableau); // affiche [2, 3, 4]


//concat():----------------- 
//La méthode concat() crée et renvoie un nouveau tableau en joignant plusieurs tableaux ou des valeurs.


//--Exemple:


const nombres1 = [1, 2];
const nombres2 = [3, 4];
const nombres3 = [5, 6];
const tousLesNombres = nombres1.concat(nombres2, nombres3);
//  console.log(tousLesNombres); // affiche [1, 2, 3, 4, 5, 6]


//---------includes():----------------
 //Cette méthode vérifie si un tableau contient une certaine valeur et renvoie true ou false.


//----Exemple:
const array = [1, 2, 3];
const hasValue = array.includes(2);
//  console.log(hasValue); // true




//----------splice():---------------------
// Cette méthode ajoute ou supprime des éléments d'un tableau à une position donnée.


//--Exemple:

const array2 = [1, 2, 3, 4, 5];
array2.splice(2, 3, 6, 7);
//  console.log(array2); // [1, 2, 6, 7, 3, 4, 5]

array2.splice(4, 2);
//  console.log(array2); // [1, 2, 6, 7, 5]


//-------------reverse():--------------- 
//Cette méthode inverse l'ordre des éléments d'un tableau.


//--Exemple:

const array3 = [1, 2, 3, 4, 5];
array3.reverse();
//  console.log(array3); // [5, 4, 3, 2, 1]



//--------------toString():-------------
 //Cette méthode renvoie une chaîne de caractères qui représente les éléments d'un tableau.


//--Exemple :

const array4 = [1, 2, 3];
const stringArray = array4.toString();
//  console.log(stringArray); // output : "1,2,3"

//--------------lastIndexOf():---------------
 //Cette méthode renvoie le dernier index d'un élément donné dans un tableau, ou -1 s'il n'est pas présent.

//--Exemple :

const array6 = [1, 2, 3, 2];
const index = array6.lastIndexOf(2);
// console.log(index); // output : 3


//-----------every():---------------------
// Cette méthode vérifie si tous les éléments du tableau répondent à une condition donnée.


//Exemple :

const array7 = [1, 2, 3, 4, 5];
const everyElement = array7.every((element) => element > 2);
// console.log(everyElement); // output : false


//------------some():-----------------------
 //Cette méthode vérifie si au moins un élément du tableau répond à une condition donnée.


//--Exemple :

const array8 = [1, 2, 3, 4, 5];
const someElements = array8.some((element) => element > 2);
// console.log(someElements); // output : true

//------------find():------------------
 //Cette méthode renvoie le premier élément du tableau qui répond à une condition donnée.


//--Exemple :

const array9 = [1, 2, 3, 4, 5];
const foundElement = array9.find((element) => element > 2);
// console.log(foundElement); // output : 3







let data = [

    {
        firstname: "myra",
        lastname: "dev1",
        age: 30,
        technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
        adress: "MarchéB",
        admin: false
    },
    {
        firstname: "rosto",
        lastname: "dev2",
        age: 29,
        technos: ["Php", "NodeJs", "React", "Python", "Flutter"],
        admin: false
    }, {
        firstname: "rons",
        lastname: "dev3",
        age: 32,
        technos: ["CSS", "NodeJs", "React", "Taillwindcss", "Flutter"],
        admin: true
    },
];

document.body.innerHTML = data
  //.filter((user)=> user.admin === false)
 //.filter((user)=> user.firstname.includes("my"))
 //.sort((a, b) => a.age - b.age)
.map(
  (user) => 
    `
    <div class="user-card">
        <h2>${user.firstname}</h2>
        <p>Age ${user.age} ans </p>
        <p>Status : ${user.admin ? "Modérateur" : "Membre"} </p>
    </div>
    `
).join("**************************")




  // Methodes String
  let string2 ="Javascript est un langage orienté objet";

  // console.log(string2);
  // console.log(typeof string2);
  //console.log(eval("1" + 2));
  // console.log(parseInt("17"));
  // console.log(typeof parseInt("17"));
  // console.log();



  //----------------------
  //Date classique
  //----------------------

// Date(): Cette fonction renvoie la date et l'heure actuelles.

const date1 = new Date();
console.log(date1); // Affiche la date et l'heure actuelles


//getFullYear(): Cette méthode renvoie l'année de la date spécifiée.


//Exemple :



let date2 = new Date();
const year = date2.getFullYear();
console.log(year); // Affiche l'année en cours

//getDate(): Cette méthode renvoie le jour (1-31) de la date spécifiée.

//Exemple :

const date45 = new Date();
const day = date45.getDate();
console.log(day); // Affiche le jour en cours (par exemple, 27 pour le 27 septembre)

//getDay(): Cette méthode renvoie le jour de la semaine (0-6) de la date spécifiée.


//Exemple :

const date5 = new Date();
const dayOfWeek = date5.getDay();
console.log(dayOfWeek); // Affiche le jour de la semaine en cours (par exemple, 1 pour lundi)
//getHours(): Cette méthode renvoie l'heure (0-23) de la date spécifiée.


//Exemple :

const date67 = new Date();
const hour = date67.getHours();
console.log(hour);  //Affiche l'heure en cours (par exemple, 14 pour 14h)

//getMinutes(): Cette méthode renvoie les minutes (0-59) de la date spécifiée.


//Exemple :

const date7 = new Date();
const minutes = date7.getMinutes();
console.log(minutes); // Affiche les minutes en cours (par exemple, 37)


//getSeconds(): Cette méthode renvoie les secondes (0-59) de la date spécifiée.


//Exemple :

const date8 = new Date();
const seconds = date8.getSeconds();
console.log(seconds); // Affiche les secondes en cours (par exemple, 16)

//toISOString(): Cette méthode renvoie une chaîne de caractères représentant la date dans le format ISO.


//Exemple :

const date9 = new Date();
const isoDate = date9.toISOString();
 console.log(isoDate); // Affiche la date au format ISO (par exemple, 2021-09-27T14:37:16.123Z)
 console.log(date9.toString()); // Affiche la date au format ISO (par exemple, 2021-09-27T14:37:16.123Z)


//toLocaleDateString(): Cette méthode renvoie une chaîne de caractères représentant la date dans un format localisé.


//Exemple :

const date10 = new Date();
const localDate = date10.toLocaleDateString();
console.log(localDate); // Affiche la date dans un format localisé (par exemple, 27/09/2021)



//timetamp

const date = new Date();
let timetamp = Date.parse(date);
console.log(timetamp);// Le nombre de ms depuis 1970

function dateParser (chaine){
  let newDate = new Date(chaine)
  .toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric", 
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
  
  });
  return newDate;
}
 console.log(dateParser(date));
 console.log(dateParser(timetamp));
 console.log(dateParser(isoDate)); 

//----------------------------------
// Destructuring
//----------------------------------


let moreData = {
  destVar: ["Element 1", "Element 2"]
}
const { destVar } = moreData; //=== const destVar = moreData.destVar;

//console.log(moreData.destVar[0]);

// console.log(destVar);

let array10 =["90", "190", "9", "40"];
// console.log(array10[0]);
// console.log(array10[1]);
// console.log(array10[2]);
// console.log(array10[3]);

let [x, y, z, t] = array10;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(t);

//palindrome : Mot ou groupe de mots qui peut se lire indifféremment de gauche à droite ou de droite à gauche en gardant le même sens

// let mot = prompt("Entrez un mot : ");
let mot = "anana";
let reverse = mot.split("").reverse().join("");
if (mot === reverse) {
 // console.log("Le mot est un palindrome.");
} else {
 // console.log("Le mot n'est pas un palindrome.");

}
const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-")
  return [d, m, y].join("/");
};
// console.log(dateDestructuring(isoDate));


//-----------------------------------
// Les datasets
//-----------------------------------
