/*WEIGHT*/
function kilogram(){

    let numberg = document.getElementById("numberg");

    let resultKg = document.getElementById("resultKg");

    let result = 0;

    result = numberg.value / 1000;

    resultKg.innerHTML = result;

}

function milligram(){

    let numberMg = document.getElementById("numberMg");

    let resultMg = document.getElementById("resultMg");

    let result = 0;

    result = numberMg.value * 1000;

    resultMg.innerHTML = result;

}

function metricTone(){

    let numberKg = document.getElementById("numberKg");

    let resultMt = document.getElementById("resultMt");

    let result = 0;

    result = numberKg.value / 1000;

    resultMt.innerHTML = result;

}

/*DISTANCE*/

function decimeters(){

    let numberDm = document.getElementById("numberDm");

    let resultDm = document.getElementById("resultDm");

    let result = 0;

    result = numberDm.value * 10;

    resultDm.innerHTML = result;

}

function centimetres(){

    let numberCm = document.getElementById("numberCm");

    let resultCm = document.getElementById("resultCm");

    let result = 0;

    result = numberCm.value * 100;

    resultCm.innerHTML = result;

}

function millimeters(){

    let numberMm = document.getElementById("numberMm");

    let resultMm = document.getElementById("resultMm");

    let result = 0;

    result = numberMm.value * 1000;

    resultMm.innerHTML = result;

}

function kilometers(){

    let numberKm = document.getElementById("numberKm");

    let resultKm = document.getElementById("resultKm");

    let result = 0;

    result = numberKm.value * 1000;

    resultKm.innerHTML = result;

}