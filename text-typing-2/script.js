const target =document.querySelector('#target');
let array =["développeur", "web design", "graphiste"];
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
    default:
      break;
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