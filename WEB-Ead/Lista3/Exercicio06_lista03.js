function validação() {

    var campoLogin = document.getElementById("login").value;
    var campoSenha = document.getElementById("senha").value;
    var confimarSenha = document.getElementById("cSenha").value;

    if (campoLogin == '' || campoSenha == '') {
        alert("Nenhum campo pode ficar VAZIO");
        return false;
    }
    else
        if (campoSenha.length > 8) {
            alert("Digite máximo 8 caracteres.");
            apagar();
            return false;
        }
        else
            if (campoSenha != confimarSenha) {
                alert("As senhas são diferentes. Por favor digite novamente.");
                apagar();
                return false;
            }
            else
                if (confimarSenha == '') {
                    alert("Campo de confirmação de senha VAZIO");
                    return false;
                }
                else //sucesso
                    alert("Login Efetuado!");
    return true;
}

function apagar() {
    document.getElementById("senha").value = "";
    document.getElementById("cSenha").value = "";
}
