var nome = "Roberto";    
            var acionado = false;
            var relogio;
            var  sorteiaTempo;
                     
            function carregaAssustado() {   //mouseover 
                if (acionado == false)
                    document.getElementById("personagem").src = "Imagens/Assustado.png";
                if (acionado == true){
                    document.getElementById("frase").innerHTML = "Que bom que você voltou. Vamos brincar?";
                    document.getElementById("frase").style.visibility = "visible";
                    document.getElementById("frase").style.backgroundColor = "rgba(0, 255, 255, 255)";
                    document.getElementById("personagem").src = "Imagens/Alegre.png";
                
                }                
            }
            
            function carregaPensativo() {     //   onmouseout
                if (acionado==false)            
                document.getElementById("personagem").src = "Imagens/Pensativo.png";
                
                if (acionado){
                    sorteiaTempo = tempoRaivoso() ;
                    console.log(sorteiaTempo);
                    relogio = setTimeout(ficarRaivoso, sorteiaTempo * 1000);
                }
            }
            function tempoRaivoso() {               // função para intervalo de tempo 5 e 15 
                  return Math.floor(Math.random() * 15 + 5);
                    }
        
                          
            function carregarAlegre(){     // onclick
                document.getElementById("personagem").src = "Imagens/Alegre.png";
                document.getElementById("frase").innerHTML = "Gosto quando você interage comigo!";
                document.getElementById("frase").style.backgroundColor = "rgba(0, 255, 255, 255)";
                document.getElementById("frase").style.visibility = "visible";
                acionado = true;
                clearTimeout(relogio);
                relogio = setTimeout(escondeFrase, 4000);
            }
            
            function zeraCrono(){     //sempre zerar o cronometro settimeout
                if (acionado == true) {
                    clearTimeout(relogio);
                }
            }
            
            function trocafrase(){   //onmouseout= trocafrase()
               if (acionado == true) {
                   document.getElementById("frase").innerHTML = "Que bom que você voltou. Vamos brincar?";
                }
            }
            
            function ficarRaivoso() {                
                document.getElementById("frase").style.visibility = "visible";   // css dinamico deixar frase visivel
                document.getElementById("personagem").src = "Imagens/Nervoso.png";
                document.getElementById("frase").innerHTML = nome +" “Onde está você? Brinque comigo!!!”";
                document.getElementById("frase").style.backgroundColor = "rgba(0, 255, 255, 555)";
            }
        
            function escondeFrase(){
                document.getElementById("frase").style.visibility = "hidden";    //css dinamico deixar frase invisivel
            }
             