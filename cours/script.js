//--------------  Rappels des types de données

let string = "chaine";
// console.log(typeof (string));
let number = 29;
// console.log(typeof (number));
let boolean = true;
let object_null = null;
// console.log(typeof object);
let maVriable; // type Undefined

//--------------  Les tableaux

//Tableau-1
let array = ["Bafou", "Batié", "Baham", "Bafang"];
// console.log(array[0][2]);

//Tableau-1
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
                null;
        }

    });