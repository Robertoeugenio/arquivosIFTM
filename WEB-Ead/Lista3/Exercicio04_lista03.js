function calcular() {
    var primeiraNota = parseFloat(document.getElementById("primeiraNota").value);
    var segundaNota = parseFloat(document.getElementById("segundaNota").value);
    var total = (primeiraNota + segundaNota);
    if (total < 60)
        alert("Aluno REPROVADO com " + total + " Pontos faltaram  " + (60 - total) + " Pontos para ser Aprovado");
    else
        alert("Aluno APROVADO com " + (total) + " Pontos Parabéns!!!");
}
function validação(id) {
    if (document.getElementById(id).value < 0 || document.getElementById(id).value > 50) {
        alert("NOTA MÍNINA É ZERO E NOTA MÁXIMA 50");

    }
}
