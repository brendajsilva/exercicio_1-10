function calculateSmsCost() {
    const smsCount = parseInt(document.getElementById('smsCount').value);
    const baseCost = 5.00;
    let additionalCost = 0;

    if (smsCount > 75 && smsCount <= 240) {
        additionalCost = (smsCount - 75) * 0.05;
    } else if (smsCount > 240) {
        additionalCost = (240 - 75) * 0.05 + (smsCount - 240) * 0.10;
    }

    const totalCost = baseCost + additionalCost;

    document.getElementById('result').innerText = `Custo Total: R$ ${totalCost.toFixed(2)}`;
}
