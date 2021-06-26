// Función convertidora
function convert() {
  const celsius = document.getElementById("celsius").value;
  const kelvin = (parseInt(celsius) + 273.15).toFixed(2);
  const fahrenheit = (parseInt(celsius) * (9 / 5) + 32).toFixed(1);

  document.getElementById(
    "kelvin-result"
  ).innerText = `${celsius}° Celsius = ${kelvin}° Kelvin`;
  document.getElementById(
    "fahrenheit-result"
  ).innerText = `${celsius}° Celsius = ${fahrenheit}° Fahrenheit`;
}
