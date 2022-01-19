let promedio = Number(prompt("Ingrese la calificación de su promedio universitario anual"))

if (promedio >= 100) {
    alert("Su promedio es suficiente para pasar de año")
} else if((promedio <= 99 ) && (promedio >= 70)) {
    alert("Debe mejorar su promedio.")
} else if((promedio <= 69) && (promedio >= 40)) {
    alert("Su promedio alcanza el mínimo para aprobar.")
} else {
    alert("Ha desaprobado el año.")
}