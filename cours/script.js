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

  
//-----------------------------------
// Les datasets
//-----------------------------------

// En JavaScript, les datasets font référence aux attributs de données personnalisées que les développeurs peuvent définir sur les éléments HTML. Ces attributs fournissent un moyen de stocker des informations supplémentaires sur un élément HTML. Les datasets permettent aux développeurs de stocker et de récupérer des données personnalisées associées à un élément HTML spécifique, ce qui peut être très utile dans la manipulation des éléments HTML dans le code JavaScript.

// Par exemple, si vous avez un formulaire HTML pour créer un compte utilisateur, vous pouvez ajouter des datasets personnalisées pour stocker le nom d'utilisateur, l'adresse e-mail, etc.

// Accéder aux datasets personnalisées
const monElement = document.querySelector('#monElement');

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