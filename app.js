const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
  return Math.round(num * 100) / 100;
}


/* Celcius Converter */

function convertCelcius() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = (cTemp * (9 / 5)) + 32;
  const kTemp = cTemp * 273.15;

  fahrenheitInput.value = roundNum(fTemp)
  kelvinInput.value = roundNum(kTemp)

}

/* Fahrenheit Converter */

function convertFahrenheit() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = (fTemp + 459.67) * 5 / 9;

  kelvinInput.value = roundNum(kTemp);
  celciusInput.value = roundNum(cTemp);

}

/* Kelvin Converter */

function convertKelvin() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = 9 / 5 * (kTemp - 273) + 32;

  fahrenheitInput.value = roundNum(fTemp)
  celciusInput.value = roundNum(cTemp)

}


/* Event Listeners */
function main() {
  celciusInput.addEventListener('input', convertCelcius);
  fahrenheitInput.addEventListener('input', convertFahrenheit);
  kelvinInput.addEventListener('input', convertKelvin);
}

main();