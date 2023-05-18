const dataLowercase ="azertyuiopqsdfghjklmwxcvbn";
// console.log(dataLovercase);
const dataUppercase = dataLowercase.toUpperCase();
// console.log(dataUppercase);
const dataNumbers ="0123456789";
const dataSymbols = "()&#{[|`\^@]}%¨ !\"?;,*$!"
const rangeValue = document.getElementById("password-length");
// console.log(rangeValue);
const passwordOutput = document.getElementById("password-output");

function generateurPassword(){
    let data = [];
    let password = "";

    if(lowercase.checked)data.push(...dataLowercase);
    if(uppercase.checked)data.push(...dataUppercase);
    if(numbers.checked)data.push(...dataNumbers);
    if(symbols.checked)data.push(...dataSymbols);

    // Ce script JavaScript permet de générer une chaîne de caractères aléatoire en fonction des options sélectionnées par l'utilisateur.


    // Tout d'abord, il vérifie si la case « lowercase » est cochée. Si elle l'est, il ajoute les caractères en minuscules, stockés dans un tableau appelé dataLowercase, dans un tableau appelé data. La syntaxe data.push(...dataLowercase); permet d'ajouter tous les éléments d'un tableau dans un autre.
    
    
    // Ensuite, le script vérifie si la case « uppercase » est cochée. Si elle l'est, il ajoute les caractères en majuscules, stockés dans un tableau appelé dataUppercase, dans le tableau data.
    
    
    // Puis, il vérifie si la case « numbers » est cochée. Si elle l'est, il ajoute les chiffres, stockés dans un tableau appelé dataNumbers, dans le tableau data.
    
    
    // Enfin, si la case « symbols » est cochée, il ajoute les symboles, stockés dans un tableau appelé dataSymbols, dans le tableau data.
    
    
    // À la fin de ce script, le tableau data contient tous les caractères qui ont été sélectionnés par l'utilisateur pour générer une chaîne de caractères aléatoire.


    if(data.length === 0){
        alert("Veuillez selectionner des critères ");
        return;
        // si la variable « data » contient des éléments. Si elle est vide, l'utilisateur n'a pas sélectionné d'options et une alerte est affichée pour demander à l'utilisateur de sélectionner des critères. Le script s'arrête grâce à l'opérateur « return ».
    }
    for(i = 0;  i < rangeValue.value; i++){
        password += data[Math.floor(Math.random() * data.length)];
        // console.log(password);
        
    }  
    // une boucle « for » pour créer un mot de passe aléatoire avec un nombre de caractères défini par la variable « rangeValue.value ». Cette variable est la valeur sélectionnée par l'utilisateur à l'aide d'une balise « input » ou « range ».

    // À chaque tour de boucle, le script choisit au hasard un caractère dans la liste « data » en utilisant la fonction Math.floor(Math.random()) * data.length. Cette instruction génère un nombre entier aléatoire entre 0 et la longueur de la liste « data ». Le caractère correspondant à cet index est choisi puis ajouté à une variable « password ».
    passwordOutput.value = password; 
}
generateButton.addEventListener("click", generateurPassword);


// Here's a basic JavaScript script for a password generator:

// javascript
//  define arrays of possible characters for each category
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseChars = lowercaseChars.map(char => char.toUpperCase());
const numericChars = "0123456789".split("");
const specialChars = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?".split("");

// define function to generate random integer within a given range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// define function to generate random password
function generatePassword(length = 8) {
  let password = "";
  
  // add random characters from each category until desired length is reached
  while (password.length < length) {
    password += lowercaseChars[getRandomInt(0, lowercaseChars.length - 1)];
    password += uppercaseChars[getRandomInt(0, uppercaseChars.length - 1)];
    password += numericChars[getRandomInt(0, numericChars.length - 1)];
    password += specialChars[getRandomInt(0, specialChars.length - 1)];
  }
  
  // remove excess characters to match desired length
  password = password.slice(0, length);
  
  return password;
}

// example usage
console.log(generatePassword()); // generates a random 8-character password
console.log(generatePassword(12)); // generates 

//This script defines four arrays containing possible characters for lowercase letters, uppercase letters, numeric digits, and special characters. It also defines two functions: `getRandomInt` to generate a random integer within a given range, and `generatePassword` to create a password of a specified length by adding random characters from each category and then trimming the excess characters. 

// The script includes examples of how to use the `generatePassword` function, which will print out a random password to the console. Of course, other implementations of a password generator could be much more complex and might include features such as user input validation, character set customization, and more.