let operador1, operacion;


function escribir(num) {
    var pantalla = document.querySelector("#pantalla").innerHTML;
    
    if (!isNaN(parseFloat(pantalla)) && pantalla != 0) {
        document.querySelector("#pantalla").innerHTML += num;
    } else {0
        document.querySelector("#pantalla").innerHTML = num;
    }
}


function operar(cod) {
    operador1 = document.querySelector("#pantalla").innerHTML;
    operacion = cod;
    document.querySelector("#pantalla").innerHTML = cod;
}

function resultado() {

    let resultado1, operador2;

    operador1 = parseFloat(operador1);
    operador2 = parseFloat(document.querySelector("#pantalla").innerHTML);
    console.log(operador1 + " " + operador2);


    if (operacion == "+") {

        resultado1 = operador1 + operador2;

    } else if (operacion == "-") {

        resultado1 = operador1 - operador2;

    } else if (operacion == "/") {

        resultado1 = operador1 / operador2;

    } else if (operacion == "x") {

        resultado1 = operador1 * operador2;
    
    
    } else if (operacion == "%") {

        resultado1 = operador1 * operador2 / 100;
    }


    document.querySelector("#pantalla").innerHTML = resultado1;


}


function borradoTotal() {
    pantalla.innerHTML=0;
}




function apagar() {

    document.querySelector("#pantalla").innerHTML = "";

    let botones = document.querySelectorAll("button")
    for (let i = 0; i < botones.length; i++) {

        if (botones[i].innerHTML != "ON") {

            botones[i].onclick = ""
        }
    }

}

