
// Tout d'abord, le code définit un élément HTML spécifique en utilisant son ID (target) comme référence, et crée un tableau contenant les mots à afficher sur cet élément.
const target = document.getElementById("target");
let array = [
    "Développeur",
    "Graphiste",
    " Créatif"
];

// les variables "wordIndex" et "letterIndex" sont initialisées à 0.
let wordIndex = 0;
let letterIndex = 0;
//  
// target.textContent += array[1];
// target.textContent += array[2];
// target.style.color = "yellow";

const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex];
    setTimeout(() => {
        letter.remove();

    }, 2800);
}
//createLetter();
// setInterval(createLetter, 200);
const loop = () => {
    setTimeout(() => {
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
        } else if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        } else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {

                loop();
            }, 2800);
        }
    }, 60);
}
loop();