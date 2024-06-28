function calculateFuelCost() {
    const liters = parseFloat(document.getElementById('liters').value);
    const fuelType = document.getElementById('fuelType').value;
    let pricePerLiter;
    let discount;

    if (fuelType === 'A') {
        pricePerLiter = 2.90; // Preço fictício
        discount = liters <= 20 ? 0.02 : 0.04;
    } else if (fuelType === 'G') {
        pricePerLiter = 3.50; // Preço fictício
        discount = liters <= 20 ? 0.03 : 0.05;
    }

    const totalCost = liters * pricePerLiter * (1 - discount);

    document.getElementById('result').innerText = `Valor Final: R$ ${totalCost.toFixed(2)}`;
}
