function findMinMax() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    const numbers = [num1, num2, num3];
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    
    document.getElementById('result').innerText = `Maior: ${max}, Menor: ${min}`;
}
