function pounds(){

    let numberp = document.getElementById("numberp");

    let resultKgi = document.getElementById("resultKgi");

    let result = 0;

    result = numberp.value * 0.45359237;

    result = result.toFixed(2);

    resultKgi.innerHTML = result;

}

function kgToLb(){

    let numberKilo = document.getElementById("numberKilo");

    let resultLb = document.getElementById("resultLb");

    let result = 0;

    result = numberKilo.value * 2.20462262185;

    result = result.toFixed(2);

    resultLb.innerHTML = result;

}

function inches(){

    let numberCmi = document.getElementById("numberCmi");

    let resultIn = document.getElementById("resultIn");

    let result = 0;

    result = numberCmi.value * 0.3937007874;

    result = result.toFixed(2);

    resultIn.innerHTML = result;

}

function feet(){

    let numberCen = document.getElementById("numberCen");

    let resultFt = document.getElementById("resultFt");

    let result = 0;

    result = numberCen.value * 0.032808399;

    result = result.toFixed(2);

    resultFt.innerHTML = result;
}

function yards(){

    let numberCent = document.getElementById("numberCent");

    let resultYd = document.getElementById("resultYd");

    let result = 0;

    result = numberCent.value * 0.010936133;

    result = result.toFixed(2);

    resultYd.innerHTML = result;

}

function miles(){

    let numberKmi = document.getElementById("numberKmi");

    let resultMi = document.getElementById("resultMi");

    let result = 0;

    result = numberKmi.value * 0.6213711922;

    result = result.toFixed(2);

    resultMi.innerHTML = result;

}

function miToKm(){

    let numberMi = document.getElementById("numberMi");

    let resultKm = document.getElementById("resultKm");

    let result = 0;

    result = numberMi.value * 1.609344;

    result = result.toFixed(2);

    resultKm.innerHTML = result;

}