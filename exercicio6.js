function calculateCarCost() {
    const factoryCost = parseFloat(document.getElementById('factoryCost').value);
    const distributorPercent = parseFloat(document.getElementById('distributorPercent').value);
    
    const distributorCost = factoryCost * (distributorPercent / 100);
    const tax = factoryCost * 0.15;
    const finalCost = factoryCost + distributorCost + tax;
    
    document.getElementById('result').innerText = `Custo ao Consumidor: R$ ${finalCost.toFixed(2)}`;
}
