function verificarVoto() {
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);

    if (idade >= 16) {
        document.getElementById("resultado2").innerText = `${nome} pode votar.`;
    } else {
        document.getElementById("resultado2").innerText = `${nome} não pode votar.`;
    }
}