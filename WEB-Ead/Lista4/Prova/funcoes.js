


//    Página a ser construída: Ao abrir a página, uma caixa de diálogo contendo a seguinte mensagem 
//    “Olá, seja bem-vindo!” deverá ser exibida ao usuário.   OK  
alert("Olá, seja bem-vindo!");

// Ao clicar sobre o botão “Ok” dessa caixa, 
// uma segunda caixa de diálogo deverá ser exibida ao usuário, 
// e nela deverá ser solicitado o primeiro nome da pessoa.    
var nome = prompt("Digite seu primeiro nome: ");
// Ao clicar sobre o botão “Ok” dessa caixa, 
// deverá ser exibido no corpo do documento um formulário contendo um label (rótulo), 
// uma caixa de texto e um botão. O texto do rótulo deverá ser composto pela seguinte informação 
// “Fulano, qual o seu sobrenome?”, sendo que o texto “Fulano” deverá ser substituído 
// pelo nome informado pelo usuário na segunda caixa de diálogo.     


// X Y (onde X deve ser uma sequência de 5 a 10 letras quaisquer 
//     – maiúscula ou minúscula, seguido obrigatoriamente por um espaço em branco e, por último, 
//     um número pertencente ao intervalo [0, 999]).  -->
var acionado = false;
var contador;
var corCampo;
var lTempo;

function verificarSobrenome() {                         //vericar campo
    var expNome = document.getElementById("sobrenome").value;
    var exNome = /^\w{5,10}\s{1}\d{1,3}$/i      // teste asdg1 123

    if (exNome.test(expNome))
        document.getElementById("sobrenome").style.backgroundColor = "green";
    else {
        document.getElementById("sobrenome").style.backgroundColor = "red";
        contador = setTimeout(limparCampo, 3000);
    }
    function limparCampo() {                          //limpar campo e resetar 
        document.getElementById("sobrenome").style.backgroundColor = "write";
        document.getElementById("sobrenome").innerHTML = " ";
    }
    function zeraCampo() {     //sempre zerar o cronometro settimeout
        if (acionado == true) {
            clearTimeout(contador);
        }
    }
}