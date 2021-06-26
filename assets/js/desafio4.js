// Variables
const number = prompt("Ingrese una cantidad de días");

// Cálculo de Años
years = Math.floor(number / 365);

// Cálculo de Semanas
if (number < 365) {
  weeks = Math.floor(number / 7);
} else {
  weeks = Math.floor((number - years * 365) / 7);
}

// Cálculo de Días
days = number - years * 365 - weeks * 7;

// Document Write
document.write(`${number} días equivale a <br><br>`);

if (number < 7) {
  document.write(`${days} Días<br>`);
} else if (number < 365) {
  document.write(`${weeks} Semanas<br>`);
  document.write(`${days} Días<br>`);
} else {
  document.write(`${years} Años<br>`);
  document.write(`${weeks} Semanas<br>`);
  document.write(`${days} Días<br>`);
}
