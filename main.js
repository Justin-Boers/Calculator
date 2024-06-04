console.log('main loaded');

//functie om de button te laten displayen met value
function appendToDisplay(value) {
  document.querySelector('.display').value += value;
}

//clear button waardoor als je op c klikt dat je veld dan leeg word
function clearDisplay() {
  document.querySelector('.display').value = '';
}

//function om het resultaat te bereken en die op de display te zetten
function calculateResult() {
  try {
    const result = eval(document.querySelector('.display').value);
    document.querySelector('.display').value = result;
  } catch (error) {
    document.querySelector('.display').value = 'Error';
  }
}

//function om het percentage te berekenen
function calculatePercentage() {
  const currentValue = parseFloat(document.querySelector('.display').value);
  if (!isNaN(currentValue))  {
    document.querySelector('.display').value = currentValue / 100;
  }
}

//function om de wortel te bereken
function calculateSquareRoot() {
  const currentValue = parseFloat(document.querySelector('.display').value);
  if (!isNaN(currentValue)) {
    document.querySelector('.display').value = Math.sqrt(currentValue);
  }
}