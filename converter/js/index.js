//DUŽINA

let rezultat = 0;

let regex = /^\d+(\.\d+)?$/;

function pretvaracUKilo(){

    let kilometar = document.getElementById("kilometar");

    let rezultatKilo = document.getElementById("rezultatKilo");

    if(regex.test(kilometar.value) === true){

            rezultat = Number(kilometar.value) / 1000;

            rezultatKilo.innerHTML = rezultat;

            kilometar.style.background = "#ffffff";

    }

    else{

        kilometar.style.background = "#ff5858";

        alert("Unesite validnu brojnu vrednost");
    }

}

function pretvaracUDeci(){

    let decimetar = document.getElementById("decimetar");

    let rezultatDeci = document.getElementById("rezultatDeci");

    if(regex.test(decimetar.value) === true){

        rezultat = Number(decimetar.value) * 10;

        rezultatDeci.innerHTML = rezultat;

        decimetar.style.background = "#ffffff";
    }

    else{

        decimetar.style.background = "#ff5858";

        alert("Unesite validnu brojnu vrednost");
    }

}

function pretvaracUCenti(){

    let centimetar = document.getElementById("centimetar");

    let rezultatCenti = document.getElementById("rezultatCenti");

    if(regex.test(centimetar.value) === true){

        rezultat = Number(centimetar.value) * 100;

        rezultatCenti.innerHTML = rezultat;

        centimetar.style.background = "#ffffff";
        
    }

    else{

        centimetar.style.background = "#ff5858";

        alert("Unesite validnu brojnu vrednost");
    }

}

function pretvaracUMili(){

    let milimetar = document.getElementById("milimetar");

    let rezultatMilim = document.getElementById("rezultatMilim");

    if(regex.test(milimetar.value) === true){

        rezultat = Number(milimetar.value) * 1000;

        rezultatMilim.innerHTML = rezultat;

        milimetar.style.background = "#ffffff";
    }

    else{
        
        milimetar.style.background = "#ff5858";

        alert("Unesite validnu brojnu vrednost");
    }
}

//TEŽINA

function pretvaracUTona(){

    let tona = document.getElementById("tona");

    let rezultatTona = document.getElementById("rezultatTona");

    if(regex.test(tona.value) === true){

        rezultat = Number(tona.value) / 1000;

        rezultatTona.innerHTML = rezultat;

        tona.style.background = "#ffffff";

    }

    else{

        tona.style.background = "#ff5858";

        alert("Unesite validnu brojnu vrednost");
    }

}

function pretvaracUGram(){
   
    let gram = document.getElementById("gram");

    let rezultatGram = document.getElementById("rezultatGram");

    if(regex.test(gram.value) === true){

        rezultat = Number(gram.value) * 1000;

        rezultatGram.innerHTML = rezultat;

        gram.style.background = "#ffffff";

    }

    else{

        gram.style.background = "#ff5858";

        alert("Unesite validnu brojnu vrednost");
    }

}

function pretvaracUMilig(){

    let miligram = document.getElementById("miligram");

    let rezultatMilig = document.getElementById("rezultatMilig");

    if(regex.test(miligram.value) === true){

        rezultat = Number(miligram.value) * 1000000;

        rezultatMilig.innerHTML = rezultat;

        miligram.style.background = "#ffffff";

    }

    else{

        miligram.style.background = "#ff5858";

        alert("Unesite validnu brojnu vrednost");
    }

}

//TEMPERATURA

function pretvaracUFare(){

    let farenhajt = document.getElementById("farenhajt");

    let rezultatFare = document.getElementById("rezultatFare");

    if(regex.test(farenhajt.value) === true){

        rezultat = Number(farenhajt.value) * 1.8 + 32;

        rezultatFare.innerHTML = rezultat;

        farenhajt.style.background = "#ffffff";

    }

    else{

        farenhajt.style.background = "#ff5858";

        alert("Unesite validnu brojnu vrednost");
    }

}

function pretvaracUKelvin(){

    let kelvin = document.getElementById("kelvin");

    let rezultatKelv = document.getElementById("rezultatKelv");

    if(regex.test(kelvin.value) === true){

        rezultat = Number(kelvin.value) + 273.15;

        rezultatKelv.innerHTML = rezultat;

        kelvin.style.background = "#ffffff";

    }

    else{

        kelvin.style.background = "#ff5858";

        alert("Unesite validnu brojnu vrednost");
    }

}
