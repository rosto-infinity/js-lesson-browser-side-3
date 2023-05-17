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


