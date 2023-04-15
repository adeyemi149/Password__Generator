const pwgEl = document.getElementById("pwg");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");;


const upperCase = "ABCDEFGHIJKLMNOPQQRSTVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "~!@#$%^&*()"

function getUpperCase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getLowerCase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateValues() {
    const values = [];
    
    if(upperEl.checked) {
        values.push(getUpperCase());
    }

    if(lowerEl.checked) {
        values.push(getLowerCase());
    }

    if(numberEl.checked) {
        values.push(getNumbers());
    }

    if(symbolEl.checked) {
        values.push(getSymbols());
    }

    if(values.length === 0) return "";

    return values[Math.floor(Math.random() * values.length)];
}

function generatePassword() {
    const len = lenEl.value;

    let password = "";

    //Not really necessary
    if(upperEl.checked) {
        password += getUpperCase();
    }

    if(lowerEl.checked) {
        password += (getLowerCase());
    }

    if(numberEl.checked) {
        password += (getNumbers());
    }

    if(symbolEl.checked) {
        password += (getSymbols());
    }

    for (let i = password.length; i < len; i++) {
        let value = generateValues();
        password += value;

    }
    password[Math.floor(Math.random() * password.length)];

    pwgEl.innerText = password;
}

generateEl.addEventListener("click",  generatePassword);

copyEl.addEventListener("click",() => {
    const textarea = document.createElement("textarea");

    const password = pwgEl.innerText;

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    if(navigator.clipboard) {
        navigator.clipboard.writeText(password).then(() => 
        alert("copied"));
    }
    textarea.remove();
})