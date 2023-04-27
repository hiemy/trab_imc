function calc() {
    var peso = parseFloat(document.getElementById("Peso ex: 80").value);
    var altura = parseFloat(document.getElementById("Altura ex: 1,75").value);
    
    if (isNaN(peso, altura) || !peso || !altura){
        alert("PREENCHA TUDO!")
        return false
    }

    var resultado = document.getElementById("peso");
    var imc = (peso / altura ** 2).toFixed(2);
    document.getElementById("res").innerHTML = imc

    var adulto_check = document.getElementById("faixa_etaria").checked
    if (adulto_check) {
        adulto(imc)
    } else {
        idoso(imc)
    }
    peso = ""
    altura = ""
}

function corrige(alt) {
    var altura = document.getElementById(alt);
    if (altura.value.length == 1) {
        altura.value += "."
    }
}

function adulto(imc) {
    if (imc < 18.5) {
        result = "../img/fotos_peso-removebg-preview.png"
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        result = "../img/fotos_peso_1_-removebg-preview.png"
    }
    else if (imc >= 25 && imc <= 29.9) {
        result = "../img/fotos_peso_2_-removebg-preview.png"
    }
    else if (imc >= 30 && imc <= 34.9) {
        result = "../img/fotos_peso_3_-removebg-preview.png"
    }
    else if (imc >= 35 && imc <= 39.9) {
        result = "../img/fotos_peso_4_-removebg-preview.png"
    }
    else if (imc >= 40) {
        result = "../img/fotos_peso_5_-removebg-preview.png"
    }
    document.getElementById("imc_result").src = result
}

function idoso(imc) {
    if (imc <= 22) {
        result = "../img/fotos_peso-removebg-preview.png"
    }
    else if (imc >= 22 && imc < 27) {
        result = "../img/fotos_peso_1_-removebg-preview.png"
    }
    else if (imc >= 27) {
        result = "../img/fotos_peso_2_-removebg-preview.png"
    }

    console.log(result)
    document.getElementById("imc_result").src = result
}