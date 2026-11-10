function calcularPromedio() {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(n1) ||  isNaN(n2) ||  isNaN(n3)) {
       document.getElementById("resultado").innerHTML = "Por favor; ingresa todas las notas.";
       document.getElementById("resultado").style.color = "orange";
       return;
    }

    let promedio = (n1 + n2 + n3) /3;

    let mensaje ="";
    if (promedio >= 6) {
        mensaje = "APROBADO con " + promedio.toFixed(2);
        document.getElementById("resultado").style.color = "green";
    } else {
        mensaje = "REPROBADO con " + promedio.toFixed(2);
        document.getElementById("resultado").style.color ="red";
    }

    document.getElementById("resultado").innerHTML = mensaje;
}