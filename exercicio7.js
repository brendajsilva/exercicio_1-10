function calculateSalePrice() {
    const acquisitionCost = parseFloat(document.getElementById('acquisitionCost').value);
    let salePrice = 0;
    
    if (acquisitionCost < 50) {
        salePrice = acquisitionCost * 1.35;
    } else if (acquisitionCost < 100) {
        salePrice = acquisitionCost * 1.25;
    } else {
        salePrice = acquisitionCost * 1.15;
    }
    
    document.getElementById('result').innerText = `Preço de Venda: R$ ${salePrice.toFixed(2)}`;
}
