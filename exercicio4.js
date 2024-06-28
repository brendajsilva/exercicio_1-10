function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result = '';

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Por favor, insira números válidos.';
    } else {
        switch (operation) {
            case 'A':
                result = `${num1} + ${num2} = ${num1 + num2}`;
                break;
            case 'S':
                result = `${num1} - ${num2} = ${num1 - num2}`;
                break;
            case 'M':
                result = `${num1} * ${num2} = ${num1 * num2}`;
                break;
            case 'D':
                if (num2 === 0) {
                    result = 'Divisão por zero não é permitida.';
                } else {
                    result = `${num1} / ${num2} = ${num1 / num2}`;
                }
                break;
            default:
                result = 'Operação inválida.';
        }
    }

    document.getElementById('result').innerText = result;
}
