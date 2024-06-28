function calcularCustoHortifruti() {
    const precos = {
        tomate: 5.35,
        cebola: 3.32,
        aipim: 2.87,
        batata: 4.43,
        cenoura: 3.59,
        chuchu: 1.79
    };

    let qtdeTomate = parseFloat(document.getElementById('qtdeTomate').value) || 0;
    let qtdeCebola = parseFloat(document.getElementById('qtdeCebola').value) || 0;
    let qtdeAipim = parseFloat(document.getElementById('qtdeAipim').value) || 0;
    let qtdeBatata = parseFloat(document.getElementById('qtdeBatata').value) || 0;
    let qtdeCenoura = parseFloat(document.getElementById('qtdeCenoura').value) || 0;
    let qtdeChuchu = parseFloat(document.getElementById('qtdeChuchu').value) || 0;

    let custoTotal = (qtdeTomate * precos.tomate) +
                     (qtdeCebola * precos.cebola) +
                     (qtdeAipim * precos.aipim) +
                     (qtdeBatata * precos.batata) +
                     (qtdeCenoura * precos.cenoura) +
                     (qtdeChuchu * precos.chuchu);

    document.getElementById("resultado3").innerText = `Custo total: R$ ${custoTotal.toFixed(2)}`;
}