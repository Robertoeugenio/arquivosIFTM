function calcular(operação) {
    var campo1 = document.getElementById("primeiroValor").value;
    var campo2 = document.getElementById("segundoValor").value;



    if (campo1 == '' || campo2 == '') {
        alert("Nenhum Campo pode ficar em Branco");
    }
    else
        if (campo2 == 0 && operação == '/') {
            alert("Digite  o divisor  diferente de 0");
            document.getElementById("segundoValor").value = "";
        }
        else {
            document.getElementById('resultado').value = eval(parseFloat(document.getElementById('primeiroValor').value) +
                operação + parseFloat(document.getElementById('segundoValor').value));
        }
}