//--------------join(): 
//La méthode join() crée et retourne une chaîne de caractères en combinant tous les éléments d'un tableau avec un séparateur spécifié.


//----------Exemple:


const fruits1 = ["banane", "pomme", "poire"];
const fruitsList = fruits1.join(", ");
console.log(fruitsList); // affiche "banane, pomme, poire"


//------map():
// La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau d'origine.


//--Exemple:


const nombres01 = [1, 2, 3];
const doubles = nombres01.map(x => x * 2);
console.log(doubles); // affiche [2, 4, 6]

//--Exemple:
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(firstElement); // 1
console.log(array1); // [2, 3]




//--------------shift():
// Cette méthode supprime le premier élément d'un tableau et renvoie cet élément.



//---------filter():
// La méthode filter() crée un nouveau tableau contenant tous les éléments du tableau d'origine qui passent un test spécifié sous forme de fonction.


//--Exemple:


const nombres02 = [1, 2, 3, 4, 5];
const nombresPairs = nombres02.filter(x => x % 2 === 0);
console.log(nombresPairs); // affiche [2, 4]


//---------sort():------------
// La méthode sort() trie les éléments d'un tableau selon un ordre spécifié.


//--Exemple:


const fruits = ["banane", "pomme", "poire"];
fruits.sort();
console.log(fruits); // affiche ["banane", "poire", "pomme"]


//------------push():-------------------
// La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et renvoie la nouvelle longueur du tableau.


//--Exemple:


const nombres03 = [1, 2, 3];
nombres03.push(4);
console.log(nombres03); // affiche [1, 2, 3, 4]


//----------reduce():----------------
// La méthode reduce() réduit les éléments d'un tableau à une seule valeur en appliquant une fonction fournie de gauche à droite.


//--Exemple:


const nombres04 = [1, 2, 3, 4, 5];
const somme = nombres04.reduce((total, valeur) => total + valeur);
console.log(somme); // affiche 15 (1 + 2 + 3 + 4 + 5)


//------------pop():-----------------
// La méthode pop() supprime le dernier élément d'un tableau et renvoie cet élément.


//--Exemple:


const nombres05 = [1, 2, 3, 4];
const dernierNombre = nombres05.pop();
console.log(dernierNombre); // affiche 4


//-----------slice():-------------------
// La méthode slice() renvoie une copie d'une partie d'un tableau spécifié en fonction des indices de début et de fin.


//--Exemple:


const nombres = [1, 2, 3, 4, 5];
const sousTableau = nombres.slice(1, 4);
console.log(sousTableau); // affiche [2, 3, 4]


//concat():----------------- 
//La méthode concat() crée et renvoie un nouveau tableau en joignant plusieurs tableaux ou des valeurs.


//--Exemple:


const nombres1 = [1, 2];
const nombres2 = [3, 4];
const nombres3 = [5, 6];
const tousLesNombres = nombres1.concat(nombres2, nombres3);
console.log(tousLesNombres); // affiche [1, 2, 3, 4, 5, 6]


//---------includes():----------------
 //Cette méthode vérifie si un tableau contient une certaine valeur et renvoie true ou false.


//----Exemple:
const array = [1, 2, 3];
const hasValue = array.includes(2);
console.log(hasValue); // true




//----------splice():---------------------
// Cette méthode ajoute ou supprime des éléments d'un tableau à une position donnée.


//--Exemple:

const array2 = [1, 2, 3, 4, 5];
array2.splice(2, 0, 6, 7);
console.log(array2); // [1, 2, 6, 7, 3, 4, 5]

array2.splice(4, 2);
console.log(array2); // [1, 2, 6, 7, 5]


//-------------reverse():--------------- 
//Cette méthode inverse l'ordre des éléments d'un tableau.


//--Exemple:

const array3 = [1, 2, 3, 4, 5];
array3.reverse();
console.log(array3); // [5, 4, 3, 2, 1]



//--------------toString():-------------
 //Cette méthode renvoie une chaîne de caractères qui représente les éléments d'un tableau.


//--Exemple :

const array4 = [1, 2, 3];
const stringArray = array4.toString();
console.log(stringArray); // output : "1,2,3

//--------------lastIndexOf():---------------
 //Cette méthode renvoie le dernier index d'un élément donné dans un tableau, ou -1 s'il n'est pas présent.

//--Exemple :

const array6 = [1, 2, 3, 2];
const index = array6.lastIndexOf(2);
console.log(index); // output : 3


//-----------every():---------------------
// Cette méthode vérifie si tous les éléments du tableau répondent à une condition donnée.


//Exemple :

const array7 = [1, 2, 3, 4, 5];
const everyElement = array7.every((element) => element > 2);
console.log(everyElement); // output : false


//------------some():-----------------------
 //Cette méthode vérifie si au moins un élément du tableau répond à une condition donnée.


//--Exemple :

const array8 = [1, 2, 3, 4, 5];
const someElements = array8.some((element) => element > 2);
console.log(someElements); // output : true

//------------find():------------------
 //Cette méthode renvoie le premier élément du tableau qui répond à une condition donnée.


//--Exemple :

const array9 = [1, 2, 3, 4, 5];
const foundElement = array9.find((element) => element > 2);
console.log(foundElement); // output : 3







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
.sort((a, b) => b.age - a.age)
.map(
  (user) => 
    `
    <div class="user-card">
        <h2>${user.firstname}</h2>
        <p>Age ${user.age} ans </p>
        <p>Status : ${user.admin ? "Modérateur" : "Membre"} </p>
    </div>
    `
)
 .join("");