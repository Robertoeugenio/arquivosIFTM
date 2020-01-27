function calcular() {
    var primeiraNota = parseFloat(document.getElementById("primeiraNota").value);
    var segundaNota = parseFloat(document.getElementById("segundaNota").value);
    var total = (primeiraNota + segundaNota);
    if (total < 60)
        alert("Aluno REPROVADO");
    else
        alert("Aluno APROVADO");
}
function validação(id) {
    if (document.getElementById(id).value < 0 || document.getElementById(id).value > 50) {
        alert("NOTA MÍNINA É ZERO E NOTA MÁXIMA 50");
        
    }
}