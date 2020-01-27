
function trocarImg(nImg,novaLegenda,corLegenda){
    document.getElementById("personagem").src="img/imagem"+nImg+".jpeg";
    document.getElementById("legenda").style.color=corLegenda;
    document.getElementById("balls").style.color=corLegenda;
    document.getElementById("balls").style.backround = "skyblue";
    document.getElementById("balls").style.borderRadius = "50px";
}
