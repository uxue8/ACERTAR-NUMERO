numaleat = Math.round(Math.random() * 50);
function alerta() {

    alert("El numero aleatorio es:" + numaleat);
    document.getElementById('divjuego').style.display = "block";
}

let num = "";
let fallos = 0;
function comprobar() {
    num = document.getElementById('mi_numero').value;

    if (isNaN((num))) {
        document.getElementById('texto').innerHTML = "No se pueden letras";
    } else if (num > 50 || num < 0) {
        document.getElementById('texto').innerHTML = "Ese numero es mayor que 50 o menor que 50";
    }
    else {

        if (num == numaleat) {
            document.getElementById('texto').innerHTML = "Has acertado";
            document.getElementById('divimagen').style.display = "block";
            document.getElementById('imagen').setAttribute("src", "images/ok.png");
        }
        else {
            fallos++;
            if (num > numaleat) {
                document.getElementById('texto').innerHTML = "El numero es menor";

            } else {
                document.getElementById('texto').innerHTML = "El numero es mayor";
            }
        }
        if (fallos == 1) {
            document.getElementById('celda0').style.backgroundColor = "red";
        }
        else if (fallos == 2) {
            document.getElementById('celda1').style.backgroundColor = "red";
        }
        else if (fallos == 3) {
            document.getElementById('celda2').style.backgroundColor = "red";
        }
        else if (fallos == 4) {
            document.getElementById('celda3').style.backgroundColor = "red";
        }
        else if (fallos == 5) {
            document.getElementById('celda4').style.backgroundColor = "red";
            document.getElementById('texto').innerHTML = "Has fallado ya 5 veces";
            document.getElementById('divimagen').style.display = "block";
        }

    }
}

