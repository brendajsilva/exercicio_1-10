function calculateSalary() {
    const sales = parseFloat(document.getElementById('sales').value);
    const fixedSalary = 1800.00;
    let commission = 0;

    if (sales <= 10000) {
        commission = sales * 0.03;
    } else if (sales <= 30000) {
        commission = sales * 0.05;
    } else {
        commission = sales * 0.08;
    }

    const totalSalary = fixedSalary + commission;

    document.getElementById('result').innerText = `Salário Total: R$ ${totalSalary.toFixed(2)}`;
}
