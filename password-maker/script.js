const dataLowercase = "azertyuiopqsdfghjklmwxcvbn"
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "é'()-è_çà)ù*$^#{[|`\"%@]}"
const rangevalue = document.getElementById("password-length");
// console.log(rangevalue.value);
const passwordOutput = document.getElementById("password-output");
// console.log(passwordOuput);


function generatePassword() {
    // console.log('je génere un mot de passe');
    let data = [];
    let password =""
    // console.log(lowercase.checked);
    // console.log(uppercase.checked);
    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);
    //  console.log(data[Math.floor(Math.random() * data.length)]);
    if(data.length == 0){
        alert('veuillez sélectionner des critères');
        return;
    }
    for (let i = 0; i < rangevalue.value; i++) {
       password +=data[Math.floor(Math.random() * data.length)];
    //    console.log(password);
    }
    passwordOutput.value = password;
    passwordOutput.select();
    document.execCommand("copy");
    generateButton.textContent = "Copié !";

    setTimeout(() => {
        generateButton.textContent = "Générer  de mot de passe";
        
    }, 2080);
}

generateButton.addEventListener('click', generatePassword);
