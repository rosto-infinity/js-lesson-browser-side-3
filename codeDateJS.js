//  ----------------------
  // Date classique
  // ----------------------

//  Date() Cette fonction renvoie la date et l'heure actuelles.

const date1 = new Date();
console.log(date1); // Affiche la date et l'heure actuelles


getFullYear() //Cette méthode renvoie l'année de la date spécifiée.


//Exemple 



let date2 = new Date();
const year = date2.getFullYear();
console.log(year);  //Affiche l'année en cours

//getDate() Cette méthode renvoie le jour (1-31) de la date spécifiée.

//Exemple 

const date45 = new Date();
const day = date45.getDate();
console.log(day);  //Affiche le jour en cours (par exemple, 27 pour le 27 septembre)

getDay() //Cette méthode renvoie le jour de la semaine (0-6) de la date spécifiée.


//Exemple 

const date5 = new Date();
const dayOfWeek = date5.getDay();
console.log(dayOfWeek);  //Affiche le jour de la semaine en cours (par exemple, 1 pour lundi)
getHours() //Cette méthode renvoie l'heure (0-23) de la date spécifiée.


//Exemple 

const date67 = new Date();
const hour = date67.getHours();
console.log(hour); // Affiche l'heure en cours (par exemple, 14 pour 14h)

getMinutes() //Cette méthode renvoie les minutes (0-59) de la date spécifiée.


//Exemple 

const date7 = new Date();
const minutes = date7.getMinutes();
console.log(minutes);  //Affiche les minutes en cours (par exemple, 37)


getSeconds() //Cette méthode renvoie les secondes (0-59) de la date spécifiée.


//Exemple 

const date8 = new Date();
const seconds = date8.getSeconds();
console.log(seconds);  //Affiche les secondes en cours (par exemple, 16)

toISOString() //Cette méthode renvoie une chaîne de caractères représentant la date dans le format ISO.


//Exemple 

const date9 = new Date();
const isoDate = date9.toISOString();
console.log(isoDate);  //Affiche la date au format ISO (par exemple, 2021-09-27T143716.123Z)


toLocaleDateString() //Cette méthode renvoie une chaîne de caractères représentant la date dans un format localisé.


//Exemple 

const date10 = new Date();
const localDate = date10.toLocaleDateString();
console.log(localDate);  //Affiche la date dans un format localisé (par exemple, 27092021)



//timetamp

const date = new Date();
let timetamp = Date.parse(date);
console.log(timetamp); //Le nombre de ms depuis 1970

function dateParser (chaine){
  let newDate = new Date(chaine)
  .toLocaleDateString(fr-FR, {
      year: "numeric",
      month: "long",
      day: "numeric", 
      hour:" numeric",
      minute: "numeric",
      second: "numeric",
  
  });
  return newDate;
}
console.log(dateParser(date));
console.log(dateParser(timetamp));
console.log(dateParser(isoDate)); 