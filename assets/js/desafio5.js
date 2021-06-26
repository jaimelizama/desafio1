// Variables

alert("¡Hola! a continuación, ingresa 5 números");
const num1 = prompt("Ingrese el primer número");
const num2 = prompt("Ingrese el segundo número");
const num3 = prompt("Ingrese el tercer número");
const num4 = prompt("Ingrese el cuarto número");
const num5 = prompt("Ingrese el quinto número");

sum =
  parseInt(num1) +
  parseInt(num2) +
  parseInt(num3) +
  parseInt(num4) +
  parseInt(num5);

avg = (sum / 5).toFixed(1);

// Document Write
document.write("La suma de los números ingresados es: " + sum + "<br>");
document.write("El promedio de los números ingresados es: " + avg + "<br>");
