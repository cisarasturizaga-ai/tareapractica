let nombreAlumno = "Juan Perez";
const CURSO = "Desarrollo Web";

let mensajeFinal ="Hola " + nombreAlumno + ", bienvenido al curso de " + CURSO;

console.log(mensajeFinal);

document.getElementById("mensaje").innerHTML = mensajeFinal;