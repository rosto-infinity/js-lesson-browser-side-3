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
// console.log(array[0][2]);

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

    // Methodes String
    let string2 ="Javascript est un langage orienté objet";

    // console.log(string2);
    // console.log(typeof string2);
    //console.log(eval("1" + 2));
    // console.log(parseInt("17"));
    // console.log(typeof parseInt("17"));
    // console.log();



    //Date classique

// Date(): Cette fonction renvoie la date et l'heure actuelles.

const date1 = new Date();
//console.log(date1); // Affiche la date et l'heure actuelles


//getFullYear(): Cette méthode renvoie l'année de la date spécifiée.


//Exemple :



let date2 = new Date();
const year = date2.getFullYear();
//console.log(year); // Affiche l'année en cours

//getDate(): Cette méthode renvoie le jour (1-31) de la date spécifiée.

//Exemple :

const date45 = new Date();
const day = date45.getDate();
//console.log(day); // Affiche le jour en cours (par exemple, 27 pour le 27 septembre)

//getDay(): Cette méthode renvoie le jour de la semaine (0-6) de la date spécifiée.


//Exemple :

const date5 = new Date();
const dayOfWeek = date5.getDay();
//console.log(dayOfWeek); // Affiche le jour de la semaine en cours (par exemple, 1 pour lundi)
//getHours(): Cette méthode renvoie l'heure (0-23) de la date spécifiée.


//Exemple :

const date67 = new Date();
const hour = date67.getHours();
//console.log(hour);  //Affiche l'heure en cours (par exemple, 14 pour 14h)

//getMinutes(): Cette méthode renvoie les minutes (0-59) de la date spécifiée.


//Exemple :

const date7 = new Date();
const minutes = date7.getMinutes();
//console.log(minutes); // Affiche les minutes en cours (par exemple, 37)


//getSeconds(): Cette méthode renvoie les secondes (0-59) de la date spécifiée.


//Exemple :

const date8 = new Date();
const seconds = date8.getSeconds();
//console.log(seconds); // Affiche les secondes en cours (par exemple, 16)

//toISOString(): Cette méthode renvoie une chaîne de caractères représentant la date dans le format ISO.


//Exemple :

const date9 = new Date();
const isoDate = date9.toISOString();
console.log(isoDate); // Affiche la date au format ISO (par exemple, 2021-09-27T14:37:16.123Z)


//toLocaleDateString(): Cette méthode renvoie une chaîne de caractères représentant la date dans un format localisé.


//Exemple :

const date10 = new Date();
const localDate = date10.toLocaleDateString();
//console.log(localDate); // Affiche la date dans un format localisé (par exemple, 27/09/2021)



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
        seconde: "numeric",
    
    });
    return newDate;
}
console.log(dateParser(date));
console.log(dateParser(timetamp));
console.log(dateParser(iso));