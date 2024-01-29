let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function sortNumbersDescending() {
    let currentValue = display.value;
    let numbersArray = currentValue.split(/\+|\-|\*|\//).map(Number);

    // Sort the numbers in descending order
    numbersArray.sort((a, b) => b - a);

    // Rebuild the expression with sorted numbers
    let operatorsArray = currentValue.split(/\d+/).filter(operator => operator !== '');
    let sortedExpression = '';

    for (let i = 0; i < operatorsArray.length; i++) {
        sortedExpression += numbersArray[i] + operatorsArray[i];
    }

    sortedExpression += numbersArray[numbersArray.length - 1];

    display.value = sortedExpression;
}
