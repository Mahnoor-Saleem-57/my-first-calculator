function calculate(operation) {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    let result = 0;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Please enter valid numbers");
        return;
    }

    switch (operation) {
        case 'add':
            result = firstNumber + secondNumber;
            break;
        case 'subtract':
            result = firstNumber - secondNumber;
            break;
        case 'multiply':
            result = firstNumber * secondNumber;
            break;
        case 'divide':
            if (secondNumber === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            result = 0;
    }

    document.getElementById('result').textContent = "Result: " + result;
}