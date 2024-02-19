const target =document.querySelector('#target');
let array =["développeur", "webDesign", "graphiste"];
// console.log(array[1]);
let wordIndex =0;
let letterIndex =0;

const createLetter = () =>{
  const letter = document.createElement('span');
  target.appendChild(letter);
  // Applique une classe CSS différente en fonction de l'index du mot
  switch (wordIndex) {
    case 0:
      letter.classList.add('vert');
      break;
    case 1:
      letter.classList.add('rouge');
      break;
    case 2:
      letter.classList.add('jaune');
      break;
    default:null;
  }
  letter.textContent = array[wordIndex][letterIndex];
  // console.log(array[wordIndex]);
  setTimeout(()=>{
    letter.remove();
  },2800)
}

const loop = ()=>{
  setTimeout(() => {
    if(wordIndex >= array.length){
      wordIndex =0;
      loop()

    }else if(letterIndex < array[wordIndex].length){
      createLetter();
      letterIndex++;
      loop();
    }else{
      wordIndex++
      letterIndex =0;
      setTimeout(() => {
        loop()  
      }, 2800);
      
    } 
   }, 60);
};
loop();


// Ce code crée une animation où chaque lettre des mots du tableau array est affichée successivement, avec une couleur différente pour chaque mot. Voici une explication détaillée du code :
// 1.	La ligne const target = document.querySelector('#target'); sélectionne l'élément HTML ayant l'ID "target" et le stocke dans la variable target. Cet élément sera utilisé comme conteneur pour afficher les lettres.
// 2.	Le tableau array contient les mots à afficher avec des couleurs différentes.
// 3.	Les variables wordIndex et letterIndex sont initialisées à 0. Elles sont utilisées pour suivre l'index du mot et de la lettre actuellement affichés.
// 4.	La fonction createLetter est définie. Elle crée un nouvel élément span appelé letter et l'ajoute au target. Ensuite, elle utilise une instruction switch pour déterminer quelle classe CSS appliquer à letter en fonction de la valeur de wordIndex. Chaque cas de la switch correspond à un mot différent du tableau array et applique une classe CSS spécifique pour définir la couleur. Le contenu textuel de letter est ensuite défini comme la lettre actuelle du mot en utilisant les indices wordIndex et letterIndex dans le tableau array. Enfin, après un délai de 2800 millisecondes, l'élément letter est supprimé.
// 5.	La fonction loop est définie. Elle est responsable de l'animation en boucle des lettres. À l'intérieur de cette fonction, une instruction setTimeout est utilisée pour exécuter le code après un délai de 60 millisecondes. Dans la fonction loop, trois cas sont gérés :
// •	Si wordIndex dépasse la longueur du tableau array, cela signifie que toutes les lettres de tous les mots ont été affichées. Dans ce cas, wordIndex est réinitialisé à 0 pour recommencer l'animation depuis le début, et la fonction loop est rappelée pour continuer l'animation en boucle.
// •	Si letterIndex est inférieur à la longueur du mot actuel (array[wordIndex].length), cela signifie qu'il reste encore des lettres à afficher pour ce mot. Dans ce cas, la fonction createLetter est appelée pour afficher la lettre suivante du mot actuel, letterIndex est incrémenté, et la fonction loop est rappelée pour afficher la lettre suivante.
// •	Si aucun des cas précédents n'est vrai, cela signifie que toutes les lettres du mot actuel ont été affichées. Dans ce cas, wordIndex est incrémenté pour passer au mot suivant, letterIndex est réinitialisé à 0, et une autre instruction setTimeout est utilisée pour appeler la fonction loop après un délai de 2800 millisecondes. Cela permet de faire une pause avant de commencer à afficher les lettres du prochain mot.
// 6.	Enfin, la fonction loop est appelée pour démarrer l'animation des lettres.
// En résumé, ce code crée une animation où les lettres des mots du tableau array sont affichées successivement, avec des couleurs différentes pour chaque mot. L'animation se répète en boucle jusqu'à ce que toutes les lettres de tous les mots aient été affichées.
