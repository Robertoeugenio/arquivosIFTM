
function trocarImg(nImg,novaLegenda,corLegenda, num){
    document.getElementById("personagem").src="img/imagem"+nImg+".jpeg";
    document.getElementById("legenda").innerHTML= novaLegenda;
    document.getElementById("legenda").style.color=corLegenda;
    document.getElementById("legenda").innerHTML=document.getElementById("leg"+num).innerHTML;
    document.getElementById("botoes").src="img/buttons"+num+".png";
    document.getElementById("icones").src="img/icone"+num+".png";
    document.getElementById("textoleg").innerHTML=document.getElementById("leg"+num).innerHTML;
}