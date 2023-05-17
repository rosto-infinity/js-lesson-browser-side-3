const dataLowercase ="azertyuiopqsdfghjklmwxcvbn";
// console.log(dataLovercase);
const dataUppercase = dataLowercase.toUpperCase();
// console.log(dataUppercase);
const dataNumbers ="0123456789";
const dataSymbols = "()&#{[|`\^@]}%¨ !\"?;,*$!"
const rangeValue = document.getElementById("password-length");
// console.log(rangeValue);

function generateurPassword(){
    let data = [];
    let password = "";

    if(lowercase.checked)data.push(dataLowercase);
    if(uppercase.checked)data.push(dataUppercase);
    if(numbers.checked)data.push(dataNumbers);
    if(symbols.checked)data.push(dataSymbols);

    if(data.length === 0){
        alert("Veuillez selectionner des critères ");
        return;
    }
    for(i = 0;  i < rangeValue.value; i++){
        password = data[Math.floor(Math.random()) * data.length];
        console.log(password);
        console.log(data);
    }   
}
generateButton.addEventListener("click", generateurPassword);


