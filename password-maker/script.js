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
    // document.execCommand("copy");
    // navigator.clipboard.read("Copié !");
    // generateButton.textContent = "Copié !";
    navigator.clipboard.writeText(password)
    .then(() => {
      generateButton.textContent = "Copié !";
      setTimeout(() => {
        generateButton.textContent = "Générer un mot de passe";
      }, 2000);
    })
    .catch((err) => {
      console.error('Une erreur est survenue lors de la copie du mot de passe', err);
    });

    // setTimeout(() => {
    //     generateButton.textContent = "Générer  de mot de passe";
        
    // }, 2080);
}

generateButton.addEventListener('click', generatePassword);


// const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
// const dataUppercase = dataLowercase.toUpperCase();
// const dataNumbers = "0123456789";
// const dataSymbols = "é'()-è_çà)ù*$^#{[|`\"%@]}";
// const rangevalue = document.getElementById("password-length");
// const passwordOutput = document.getElementById("password-output");

// const lowercase = document.getElementById("lowercase");
// const uppercase = document.getElementById("uppercase");
// const numbers = document.getElementById("numbers");
// const symbols = document.getElementById("symbols");
// const generateButton = document.getElementById("generate-button");

// const data = {
//   lowercase: dataLowercase,
//   uppercase: dataUppercase,
//   numbers: dataNumbers,
//   symbols: dataSymbols,
// };

// function generatePassword() {
//   let selectedData = Object.keys(data).filter((type) => {
//     return eval(type).checked;
//   });
  
//   if (selectedData.length === 0) {
//     alert('veuillez sélectionner des critères');
//     return;
//   }
  
//   let password = "";
//   for (let i = 0; i < rangevalue.value; i++) {
//     let randomType = selectedData[Math.floor(Math.random() * selectedData.length)];
//     let randomChar = data[randomType][Math.floor(Math.random() * data[randomType].length)];
//     password += randomChar;
//   }

//   passwordOutput.value = password;
//   passwordOutput.select();
//   navigator.clipboard.writeText(password)
//     .then(() => {
//       generateButton.textContent = "Copié !";
//       setTimeout(() => {
//         generateButton.textContent = "Générer un mot de passe";
//       }, 2000);
//     })
//     .catch((err) => {
//       console.error('Une erreur est survenue lors de la copie du mot de passe', err);
//     });
// }



// generateButton.addEventListener('click', generatePassword);











