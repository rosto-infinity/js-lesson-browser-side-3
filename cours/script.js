//--------------  Rappels des types de données

let string = "chaine";
// console.log(typeof (string));
let number = 29;
// console.log(typeof (number));
let boolean = true;
let object_null = null;
//  console.log(typeof (object_null));
let maVriable; // type Undefined

//--------------  Les tableaux

//Tableau-1
let array = ["Bafou", "Batié", "Baham", "Bafang"];
console.log(array[0][2]);

//Tableau-2
let array2 = ["Bafou", 29, true, [5, 7], "Batié", "Baham", {
    nom: "rosto",
    age: 29
}];
// console.log(array2[6].age); //se baladé sur les objets


//--------------  Les objts
let objet = {
    firstname: "rosto",
    lastname: "dev",
    age: 29,
    technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
    admin: false
}
// console.log(objet.technos[2]);
// console.log(objet.technos[2][2]);
objet.adresse = "rond point";
// console.log(objet);s



//---------------------------
//--Les methodes strings
//---------------------------
// 1-charAt() : renvoie le caractère à une position donnée dans une chaîne.

const str = "Hello World";
    const char = str.charAt(1); // renvoie "e"
    console.log(char);

// 2-concat() : concatène deux ou plusieurs chaînes de caractères.
    const str1 = "Hello";
    const str2 = "World";
    const str3 = str1.concat(" ", str2); // renvoie "Hello World"
    console.log(str3);

//  3-includes() : vérifie si une chaîne de caractères contient une sous-chaîne donnée.
    const includes = str.includes("World"); // renvoie true
    console.log(includes);

 // 4-lastIndexOf() : renvoie l'index de la dernière occurrence d'une sous-chaîne donnée dans une chaîne de caractères.

    const index = str.indexOf("World"); // renvoie 6
    console.log(index);

// 5-lastIndexOf() : renvoie l'index de la dernière occurrence d'une sous-chaîne donnée dans une chaîne de caractères

    const index1 = str.lastIndexOf("o"); // renvoie 7
    console.log(index1);

// 6-replace() : remplace une sous-chaîne donnée par une autre sous-chaîne dans une chaîne de caractères.


// 7-split() : divise une chaîne de caractères en un tableau de sous-chaînes en utilisant un séparateur donné.

// 8-slice() : extrait une partie d'une chaîne de caractères et renvoie une nouvelle chaîne.


// 9-toLowerCase() : convertit une chaîne de caractères en minuscules.


//10- toUpperCase() : convertit une chaîne de caractères en majuscules.

//11- trim(): Supprime les espaces blancs au début et à la fin d'une chaîne de caractères.

// 12-match(): Renvoie un tableau contenant les correspondances trouvées en utilisant une expression régulière.

//13- repeat(): Répète une chaîne un certain nombre de fois.



//---------------------------
//--Les methodes numbers
//---------------------------


//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%-
isFinite();
// Un booléen indiquant si la valeur passée en argument est un nombre fini.

Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite("0"); // false, ce qui aurait
// renvoyé true avec isFinite("0")

Number.isFinite(null); // false, ce qui aurait
// renvoyé true avc isFinite(null)

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%%%
isInteger();

// La méthode Number.isInteger()permet de déterminer si l'argument est un nombre entier.
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(0); // true
Number.isInteger(1.0); // true
// Number.isInteger(9…9999); // true, même si le nombre dépasse 32 bits

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(-Infinity); // false
Number.isInteger(true); // false
Number.isInteger(NaN); // false
Number.isInteger("10"); // false

Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true


//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
isNaN();

Number.isNaN(valeurÀTester);
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// tout le reste renverra : false
Number.isNaN(undefined);
Number.isNaN({});

Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);

Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
Number.isNaN("NaN");
Number.isNaN("blabla"); // ex : cette valeur aurait rendu true avec la méthode isNaN de l'objet global


//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
parseFloat();
// La méthode Number.parseFloat() analyse et convertit une chaîne de caractères en un nombre flottant. Cette méthode possède un comportement identique à parseFloat et fait partie d'ECMAScript 2015 (dans le but de « modulariser » les méthodes globales).


//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
parseInt();
// La méthode Number.parseInt() analyse et convertit une chaine de caractères, fournie en argument, en un entier dans la base souhaitée.

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Number.prototype.toFixed();
// La méthode toFixed() permet de formater un nombre en notation à point-fixe.

// Attention : En raison du standard IEEE 754 qui est utilisé par JavaScript pour représenter les nombres, tous les nombres décimaux ne sont pas représentés exactement en JavaScript, ce qui peut mener à des résultats inattendus (comme 0.1 + 0.2 === 0.3 qui renvoie false).

let numObj = 12345.6789;

numObj.toFixed(); // Renvoie '12346' : arrondi, aucune partie fractionnaire
numObj.toFixed(1); // Renvoie '12345.7' : arrondi ici aussi
numObj.toFixed(6); // Renvoie '12345.678900' : des zéros sont ajoutés
(1.23e20).toFixed(2); // Renvoie '123000000000000000000.00'
(1.23e-10).toFixed(2); // Renvoie '0.00'
(2.34).toFixed(1); // Renvoie '2.3'
-(2.34).toFixed(1); // Renvoie -2.3 (en raison de la précédence des opérateurs,
// les littéraux de nombres négatifs ne renvoient pas de chaînes)
(2.35).toFixed(1); // Renvoie '2.4' (arrondi supérieur)
(2.55).toFixed(1); // Renvoie '2.5' (cf. l'avertissement ci-avant)
(-2.34).toFixed(1); // Renvoie '-2.3'

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Number.prototype.toLocaleString();
// La méthode toLocaleString() permet de renvoyer une chaîne de caractères représentant un nombre en tenant compte de la locale.
toLocaleString();
toLocaleString(locales);
toLocaleString(locales, options);

const nombre = 123456.789;

// Pour la locale allemande, on utilise un point comme séparateur
// pour les milliers et une virgule comme séparateur décimal
console.log(nombre.toLocaleString("de-DE"));
// → 123.456,789

// Les locales arabes, dans la plupart des pays arabophones, utilisent
// les chiffres arabes
console.log(nombre.toLocaleString("ar-EG"));
// → ١٢٣٤٥٦٫٧٨٩

// En Inde, on utilise des séparateurs de milliers/lakh/crore
console.log(nombre.toLocaleString("en-IN"));
// → 1,23,456.789

// La clé d'extension nu indique un système numérique, ici le système chinois décimal
console.log(nombre.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六.七八九

// quand on souhaite utiliser un langage qui n'est pas pris en charge, on peut
// inclure un langage de secours. Exemple ici avec le balinais et l'indonésien
console.log(nombre.toLocaleString(["ban", "id"]));
// → 123.456,789

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Number.prototype.toPrecision();
// La méthode toPrecision() renvoie une chaîne de caractères représentant un nombre avec la précision donnée.

let objetNumber = 5.123456;
console.log(objetNumber.toPrecision()); //affiche "5.123456"
console.log(objetNumber.toPrecision(5)); //affiche "5.1235"
console.log(objetNumber.toPrecision(2)); //affiche "5.1"
console.log(objetNumber.toPrecision(1)); //affiche "5"

numObj = 0.000123;

console.log(numObj.toPrecision()); // affiche "0.000123"
console.log(numObj.toPrecision(5)); // affiche "0.00012300"
console.log(numObj.toPrecision(2)); // affiche "0.00012"
console.log(numObj.toPrecision(1)); // affiche "0.0001"

// dans certaines circonstances, on peut avoir une notation exponentielle
console.log((1234.5).toPrecision(2)); // "1.2e+3"

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Number.prototype.toString();
// La méthode toString() renvoie une chaîne de caractère représentant l'objet Number.

let compte = 10;

console.log(compte.toString()); // affiche "10"
console.log((17).toString()); // affiche "17"
console.log((17.2).toString()); // affiche "17.2"

let x = 6;

console.log(x.toString(2)); // affiche "110"
console.log((254).toString(16)); // affiche "fe"

console.log((-10).toString(2)); // affiche "-1010"
console.log((-0xff).toString(2)); // affiche "-11111111"

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Number.prototype.valueOf()
// La méthode valueOf() renvoie la valeur primitive correspondant à celle représentée par l'objet Number.

let numObj1 = new Number(10);
console.log(typeof numObj1); // object

let num = numObj1.valueOf();
console.log(num); // 10
console.log(typeof num); // number

//---------------------------
//--Les methodes Math
Math.random()
// La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu) selon une distribution approximativement uniforme sur cet intervalle. Ce nombre peut ensuite être multiplié afin de couvrir un autre intervalle. La graine (seed) du générateur est choisie par l'algorithme et ne peut pas être choisie ou réinitialisée par l'utilisateur.

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%

Math.floor()
// La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.

Math.floor(45.95); //  45
Math.floor(45.05); //  45
Math.floor(4); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
Math.floor(null); // 0
//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%

Math.ceil()
// La fonction Math.ceil()retourne le plus petit entier supérieur ou égal au nombre donné.

Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(-0.95); // -0
Math.ceil(-4); // -4
Math.ceil(-7.004); // -7
Math.ceil(null); // 0

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%

Math.pow()
// La fonction Math.pow() renvoie un nombre à une certaine puissance, c'est-à-dire base^exposant.

// Utilisation simple
Math.pow(7, 2); // 49

// Exposants négatifs
Math.pow(7, -2); // 0.02040816326530612 (1/49)

// Exposants fractionnaires
Math.pow(2, 1 / 2); // 1.4142135623730951 (racine carrée de 2)

// Cas aux limites
Math.pow(-7, 0.5); // NaN
// (les nombres négatifs n'ont pas de racine carrée)
Math.pow(-7, 1 / 3); // NaN
// Nombre négatif avec une base décimale

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%

Math.round()
// La fonction Math.round() retourne la valeur d'un nombre arrondi à l'entier le plus proche.

Math.round(20.49); //  20
Math.round(20.5); //  21
Math.round(42); //  42
Math.round(-20.5); // -20
Math.round(-20.51); // -21


//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Math.exp()
// La fonction Math.exp() renvoie l'exponentielle d'un nombre (donnée par e^x, où x est la valeur passée en argument et e la valeur du nombre d'Euler (parfois appelé constante de Napier).

Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045


//---------------------------
//--Les methodes arrays
//--------------------------
//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Array.prototype.at()


// La méthode at() prend un entier en argument et renvoie l'élément du tableau situé à cet indice. Des valeurs entières positives ou négatives peuvent être utilisées en argument. Dans ce dernier cas, la recherche est effectuée depuis la fin du tableau.

// L'accès aux éléments d'un tableau en utilisant les crochets ne permet que d'utiliser des indices positifs : array[0] renverra le premier élément, array[array.length-1] renverra le dernier. Avec array.at(-1), on peut avoir une écriture plus concise pour accéder au dernier élément. Voir les exemples ci-après.
// Le tableau avec des éléments
const corbeille = ["pomme", "banane", "poire"];

// Une fonction qui renvoie le dernier
// élément d'un tableau
function dernierElem(arr) {
  return arr.at(-1);
}

// On récupère le dernier élément du
// tableau 'corbeille'
const item1 = dernierElem(corbeille);
console.log(item1);
// Affiche 'poire' dans la console

// On ajoute un élément au tableau
// 'corbeille'
corbeille.push("orange");
const item2 = dernierElem(corbeille);
console.log(item2);
// Affiche 'orange' dans la console

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Array.prototype.concat()
// La méthode concat() est utilisée afin de fusionner deux ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.

const lettres = ["a", "b", "c"];
const chiffres = [1, 2, 3];

const alphanum = lettres.concat(chiffres);
console.table(alphanum);
// donne : ["a", "b", "c", 1, 2, 3]

// Concaténer des tableaux imbriqués
// Dans le code qui suit, on concatène deux tableaux qui ont plusieurs dimensions et on illustre la conservation des références :
const num1 = [[1]];
const num2 = [2, [3]];

const nums = num1.concat(num2);

console.table(nums);
// affichera [[1], 2, [3]]

// Ici, on modifie le premier élément de num1
num1[0].push(4);

console.table(nums);
// affichera [[1, 4], 2, [3]]




//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Array.prototype.entries()
// La méthode entries() renvoie un nouvel objet de type Array Iterator qui contient le couple clef/valeur pour chaque éléments du tableau.

// Parcourir un tableau avec ses index et éléments
const arr = ["a", "b", "c"];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}
// 0 "a"
// 1 "b"
// 2 "c"


// Boucle for...of
// On peut avoir le même résultat en utilisant une boucle for...of :

const arre = ["a", "b", "c"];
const eArr = arre.entries();

for (let e of eArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']


// Array.prototype.every()
// La méthode every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.

// Note : Cette méthode renvoie true pour n'importe quelle condition utilisée sur un tableau vide.



// Tester la valeur des éléments d'un tableau
// Dans l'exemple suivant, on teste si tous les éléments du tableau sont supérieurs à 10.

function estAssezGrand(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(estAssezGrand); // false
  [12, 54, 18, 130, 44].every(estAssezGrand); // true
  
//   Utiliser les fonctions fléchées avec every
//   Les fonctions fléchées permettent d'utiliser une syntaxe plus concise pour effectuer le même test.
[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true
[
  { a: 1, b: 2 },
  { a: 1, b: 3 },
].every((elem) => elem.a === 1); // true
[
  { a: 2, b: 2 },
  { a: 1, b: 3 },
].every((elem) => elem.a === 1); // false

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Array.prototype.fill()
// La méthode fill() remplit tous les éléments d'un tableau entre deux index avec une valeur statique. La valeur de l'index de fin n'est pas incluse. Cette méthode renvoie le tableau modifié.

// Syntaxe
arr.fill(valeur);
arr.fill(valeur, début);
arr.fill(valeur, début, fin);

Description
// Les éléments pour lesquels on utilisera la valeur sont ceux contenus dans l'intervalle de positions [début, fin].

// La méthode fill() prend jusqu'à trois arguments : valeur, début et fin. Les arguments début et fin sont optionnels. Leurs valeurs par défaut sont respectivement 0 et la taille length de l'objet this.

// Si début est négatif, il sera traité comme length+début où length est la taille du tableau. Si fin est négatif, il est traité comme length+fin.

// La fonction fill() est intentionnellement générique, il n'est pas nécessaire que sa valeur this soit un objet Array.

// La méthode fill() est une méthode de modification, elle changera l'objet this lui-même, et renverra l'objet modifié. Elle ne crée pas de copie. Lorsque cette méthode reçoit un objet comme valeur, elle copiera l'objet passé et remplira le tableau avec une référence vers cette copie.

[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Les objets sont copiés via une référence
const arrs = Array(3).fill({}); // [{}, {}, {}];
arrs[0].yop = "yop"; // [{yop: "yop"}, {yop: "yop"}, {yop: "yop"}]


//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Array.prototype.filter()
// La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.

synthaxe
arr.filter(callback); // callback(elementCourant[, index[, tableauEntier]])
const nouveauTableau = arr.filter(callback, thisArg);


// Filtrer les petites valeurs
// L'exemple suivant utilise filter pour créer une nouvelle liste où tous les éléments dont la valeur est inférieure à 10 ont été retirés.

function suffisammentGrand(element) {
    return element >= 10;
  }
  var filtre = [12, 5, 8, 130, 44].filter(suffisammentGrand);
  // filtre vaut [12, 130, 44]
  
  var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];
  
  const elementsInvalides = 0;
  
  function filtrerParID(obj) {
    // Si c'est un nombre
    if (obj.id !== undefined && typeof obj.id === "number" && !isNaN(obj.id)) {
      return true;
    } else {
      elementsInvalides++;
      return false;
    }
  }
  
  const arrByID = arr.filter(filtrerParID);
  
  console.log("Tableau filtré\n", arrByID);
  // Le tableau filtré est :
  // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
  
  console.log("Nombre d'éléments invalides = ", elementsInvalides);
  // Nombre d'éléments invalides 4
  
//   Filtrer des éléments JSON invalides et les trier en fonction d'un identifiant avec filter()
//   Dans l'exemple qui suit, on utilise filter() pour créer un objet JSON qui contient des éléments dont l'id est un entier.

// Implémentation avec la syntaxe ECMAScript 2015 (ES6)
// L'exemple suivant utilise les fonctions fléchées, et le mot clé const disponible en ES6.
const fruitss = ["pomme", "banane", "raisin", "mangue"];

const filtreTexte = (arr, requete) => {
  return arr.filter(
    (el) => el.toLowerCase().indexOf(requete.toLowerCase()) !== -1,
  );
};

console.log(filtreTexte(fruitss, "an")); // ['banane', 'mangue'];
console.log(filtreTexte(fruitss, "m")); // ['pomme', 'mangue'];


//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Array.prototype.join()
// La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.

arr.join();
arr.join(séparateur);

const a = new Array("Vent", "Pluie", "Feu");
a.join(); // "Vent,Pluie,Feu"
a.join(", "); // "Vent, Pluie, Feu"
a.join(" + "); // "Vent + Pluie + Feu"
a.join(""); // "VentPluieFeu"


//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Array.prototype.map()
// La méthode map()crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
const nombres = [1, 4, 9];
const racines = nombres.map(Math.sqrt);
// racines vaut désormais [1, 2, 3]
// nombres vaut toujours [1, 4, 9]

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Tableau.prototype.push()
// La méthode push()ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.

// arr.push(élément1, ...,élémentN)

// Exemples
// Ajouter des éléments à un tableau
// Le code suivant crée un tableau sportscontenant à sa création deux éléments, auquel sont ajoutés deux nouveaux éléments. La variable totalcontient la nouvelle taille du tableau.



const sports = ["plongée", "baseball"];
const total = sports.push("football", "tennis");

console.log(sports); // ["plongée", "baseball", "football", "tennis"]
console.log(total); // 4


// Note : Attention à ne pas utiliser cette méthode lorsque les tableaux sont très grands car une fonction n'accepte qu'un nombre limité d'arguments. Voir apply()pour plus d'informations sur ces limites.

// L'exemple qui suit utilise la syntaxe de décomposition pour ajouter les éléments d'un deuxième tableau à la fin du premier tableau.

const legumes = ["navet", "pomme de terre"];
const autresLegumes = ["céleri", "radis"];

// On fusionne les deux tableaux
// Équivalent à legumes.push('céleri', 'radis');
legumes.push(...autresLegumes);

console.log(legumes); // ['navet', 'pomme de terre', 'céleri', 'radis']


//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Tableau.prototype.reduce()
// La méthode reduce()applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.


// Syntaxe
arr.reduce(callback);
arr.reduce(callback, valeurInitiale);

//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Array.prototype.slice()
// La méthode slice() renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.

// Syntaxe

arr.slice();
arr.slice(début);
arr.slice(début, fin);


const fruitse = ["Banane", "Orange", "Citron", "Pomme", "Mangue"];
const agrumes = fruitse.slice(1, 3);

// fruits vaut --> ["Banane", "Orange", "Citron", "Pomme", "Mangue"]
// agrumes vaut --> ["Orange", "Citron"]




//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%
Array.prototype.sort()
// La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.

// La complexité en espace mémoire et en temps utilisée pour le tri ne peut pas être garantie car elle dépend de l'implémentation.

// Syntaxe


arr.sort();
arr.sort(fonctionComparaison);



let nombrese = [4, 2, 5, 1, 3];
nombres.sort((a, b) => a - b);
console.log(nombrese);






//#########%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%########%%%%%%%




//---------------------------
//--Les methodes objets
//---------------------------


//-------------- Stocké les données
let data = [

    {
        firstname: "rosto1",
        lastname: "dev1",
        age: 30,
        technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
        adress : "MarchéB",
        admin: false
    },
    {
        firstname: "rosto2",
        lastname: "dev2",
        age: 29,
        technos: ["Php", "NodeJs", "React", "Python", "Flutter"],
        admin: false
    }, {
        firstname: "rosto3",
        lastname: "dev3",
        age: 32,
        technos: ["CSS", "NodeJs", "React", "Taillwindcss", "Flutter"],
        admin: true
    },
];
// console.log(data[2].technos);




//---------------------------
// Les Structures de controle
//---------------------------
if (data[0].age > data[1].age) {
    // console.log(`${data[0].firstname} est plus agé que ${data[1].firstname}`);
} else {
    // console.log(`${data[1].firstname} est plus agé que ${data[0].firstname}`);
}

//while
let w = 0;
while (w < 10) {
    w++;
    // console.log("la valeur de w est de :" + w);
}
document.body.addEventListener(
    "click", (e) => {
        // console.log(e.target.id);

        // if (e.target.id === "Javascript") {
        //     document.body.style.background = "yellow";
        // }

        switch (e.target.id) {
            case "javascript":
                document.body.style.background = "yellow";
                break;
            case "php":
                document.body.style.background = "violet";
                break;
            case "python":
                document.body.style.background = "blue";
                break;
            default:
            document.body.style.background = "tomato";
        }

    });

  
//-----------------------------------
// Les destructuring
//-----------------------------------

// Le destructuring est une technique de programmation disponible depuis ES6 (ECMAScript 2015) en JavaScript, permettant d'extraire des valeurs d'un objet ou d'un tableau de manière plus concise.


// Voici un exemple d'utilisation du destructuring avec un objet:



const user1 = {
  name1: "Rosto",
  age1: 30,
  email1: "contact@rostodev.com"
}

const {name1, age1} = user1;

console.log(name1); // "Rosto"
console.log(age1); // 30

// Dans cet exemple, on extrait les propriétés name1 et age1 de l'objet user1 en les assignant respectivement aux letiables name1 et age1. Cela permet d'accéder plus facilement aux propriétés d'un objet sans avoir à utiliser le point notation.


// Voici un exemple d'utilisation du destructuring avec un tableau:



const fruits = ["Apple", "Banana", "Cherry"];

const [first, second, third] = fruits;

console.log(first); // "Apple"
console.log(second); // "Banana"
console.log(third); // "Cherry"

// Ici, on extrait les éléments du tableau fruits en les assignant respectivement aux letiables first, second, et third. Là encore, cela permet d'accéder plus facilement aux éléments d'un tableau sans avoir à utiliser les indices.


// Le destructuring peut également être utilisé pour extraire des propriétés imbriquées dans des objets, pour ignorer des propriétés, ou pour définir des valeurs par défaut.


 
const user2 = {
  name2: "Lele",
  age2: 31,
  contact: {
    email2: "contact@rostodev.com",
    phone2: "655-555-555"
  }
}

const {name2, age2, contact: {email2}} = user2;

console.log(name2); // "Lele"
console.log(age2); // 31
console.log(email2); // "contact@rostodev.com"

// Dans cet exemple, on extrait la propriété email2 imbriquée dans la propriété contact de l'objet user2 en l'assignant à la variable email2.


// Le destructuring est un outil puissant de JavaScript qui permet de simplifier la manipulation d'objets et de tableaux. Il est souvent utilisé en conjonction avec les fonctions fléchées pour écrire un code plus concis et lisible.


//-----------------------------------
// Les datasets
//-----------------------------------

// En JavaScript, les datasets font référence aux attributs de données personnalisées que les développeurs peuvent définir sur les éléments HTML. Ces attributs fournissent un moyen de stocker des informations supplémentaires sur un élément HTML. Les datasets permettent aux développeurs de stocker et de récupérer des données personnalisées associées à un élément HTML spécifique, ce qui peut être très utile dans la manipulation des éléments HTML dans le code JavaScript.

// Par exemple, si vous avez un formulaire HTML pour créer un compte utilisateur, vous pouvez ajouter des datasets personnalisées pour stocker le nom d'utilisateur, l'adresse e-mail, etc.

// Accéder aux datasets personnalisées
const monElement = document.getElementById('monElement');
console.log(monElement);
console.log(monElement.dataset);



const nameN = monElement.dataset.name;
const age = monElement.dataset.age;

console.log(nameN); // "John"
console.log(age); // "30"

// Définir des datasets personnalisées
monElement.dataset.hobbies = 'Soccer, Reading';
 console.log(monElement.dataset.hobbies); // "Soccer, Reading"

// Dans cet exemple, nous avons défini deux datasets personnalisées data-name et data-age sur un élément div. Nous avons également accédé aux valeurs de ces datasets à l'aide de la propriété dataset de l'élément HTML. Ensuite, nous avons ajouté un nouveau dataset personnalisé data-hobbies à l'élément et nous avons accédé à sa valeur pour vérifier si elle a été correctement ajoutée.



const h1js = document.getElementById("javascript");
//console.log(h1js);
//console.log(h1js.dataset);
const h1 = document.querySelectorAll("h1");
h1.forEach(
    (language) => console.log(language.dataset.lang)
);

//----------------------------
//Les Regex
//----------------------------

// /^ : commence la chaîne de caractères à vérifier.

// [a-z0-9._-] : autorise des caractères alphanumériques (a-z et 0-9), le point, le tiret bas et le trait d'union. Les crochets signifient que n'importe lequel de ces caractères peut être utilisé.

// + : autorise une ou plusieurs fois le caractère précédent. Cela signifie que l'adresse e-mail doit contenir au moins un des caractères spécifiés ci-dessus.

// @ : la chaîne doit contenir un caractère @.

// [a-z0-9._-]{2,} : de nouveaux caractères autorisés après le @, avec au moins 2 occurrences (ce qui signifie que le domaine doit contenir au moins deux caractères).

// \. : un point (.) doit être échappé avec un antislash ().

// [a-z]{2,4}$ : le domaine peut contenir de 2 à 4 caractères alphabétiques. Le $ signifie que la chaîne doit se terminer ici.

// .test(email); : La méthode test () est appelée sur ce regex pour vérifier si l'adresse email satisfait à cette expression régulière. Si l'adresse email correspond à cette expression régulière, la méthode retournera true, sinon elle retournera false. Notez que la variable email doit être remplacée par l'adresse email que vous voulez vérifier

let gge =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(password);

// /^ : commence la chaîne de caractères à vérifier.

// (?=.*[0-9]) : utilise une assertion positive pour vérifier si la chaîne contient au moins un chiffre (0-9).

// (?=.*[!@#$%^&*]) : utilise une autre assertion positive pour vérifier si la chaîne contient au moins un caractère spécial (!, @, #, $, %, ^, &, *).

// [a-zA-Z0-9!@#$%^&*]{8,12}$ : spécifie que la chaîne doit être composée de caractères alphanumériques (a-z, A-Z et 0-9) ainsi que des caractères spéciaux mentionnés ci-dessus, et doit avoir une longueur comprise entre 8 et 12 caractères.

// .test(password) : La méthode test () est appelée sur ce regex pour vérifier si le mot de passe satisfait à cette expression régulière. Si le mot de passe correspond à cette expression régulière, la méthode retournera true, sinon elle retournera false. Notez que la variable password doit être remplacée par le mot de passe que vous voulez vérifier.