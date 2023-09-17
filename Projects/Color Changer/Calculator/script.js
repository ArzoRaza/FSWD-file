function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operator').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    
    let result;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Division by zero is not allowed.");
                return;
            }
            break;
        default:
            alert("Invalid operator");
            return;
    }
    
    document.getElementById('result').textContent = `Result: ${result}`;
}