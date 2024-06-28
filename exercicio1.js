function calcularMedia() {
    let nums = [];
    for (let i = 1; i <= 7; i++) {
        let num = parseFloat(document.getElementById(`num${i}`).value);
        if (num >= 0 && num <= 10) {
            nums.push(num);
        }
    }

    let maioresOuIguais6 = nums.filter(num => num >= 6);
    let menoresQue6 = nums.filter(num => num < 6);

    let mediaMaioresOuIguais6 = maioresOuIguais6.reduce((a, b) => a + b, 0) / maioresOuIguais6.length || 0;
    let mediaMenoresQue6 = menoresQue6.reduce((a, b) => a + b, 0) / menoresQue6.length || 0;

    document.getElementById("resultado1").innerText = `Média dos números maiores ou iguais a 6: ${mediaMaioresOuIguais6.toFixed(2)}, Média dos números menores que 6: ${mediaMenoresQue6.toFixed(2)}`;
}
