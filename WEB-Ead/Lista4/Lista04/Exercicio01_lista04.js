 
    //função do exercício da letra  ==> A
function funcaoA() {
    var exA = document.getElementById("exemploA").value;

    var expA = /^\d\d\/\d\d\/(\d\d|\d\d\d\d)$/    // ou   == >  /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/ 
    if (expA.test(exA))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}

    //função do exercício da letra  ==> B
function funcaoB() {
    var expB = document.getElementById("exemploB").value;
    var exB = /^\d\d\d\.\d\d\d\.\d\d\d-\d\d$/    // ou   == > /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

    if (exB.test(expB))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}
     //função do exercício da letra  ==> C
function funcaoC() {
    var expC = document.getElementById("exemploC").value;
    var exC = /^IFTM-\d\d\d\/\d\d\d\-\w{2}$/i       // ou ==>  /^IFTM-\d{3}\/\d{3}-\w{2}$/i;

    if (exC.test(expC)) 
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}
function funcaoD() {
    var expD = document.getElementById("exemploD").value;
    var exD = /^MT-\d{2}\.\d{3}-IFTM$/i     // ou ==>   /^MT-\d\d\.\d\d\d-IFTM$/i

    if (exD.test(expD))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}
    //função do exercício da letra  ==> E 
function funcaoE() {
    var expE = document.getElementById("exemploE").value;
    var exE = /^MT-\d{2}\.\d{3}-(i|I)(f|F)(t|T)(m|M)$/   // ou ==> /^MT-\d\d\.\d\d\d-(i|I)(f|F)(t|T)(m|M)$/

    if (exE.test(expE))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}

    //função do exercício da letra  ==> F
function funcaoF() {
    var expF = document.getElementById("exemploF").value;
    var exF = /^M\s?T-\d.{2}?-I\s{0,1}F\s{0,1}T\s?M$/i    // ou ==> /^M\s?T-\d.\d?-I\s{0,1}F\s{0,1}T\s{0,1}M$/i

    if (exF.test(expF))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}

    //função do exercício da letra  ==> G
function funcaoG() {
    var expG = document.getElementById("exemploG").value;
    var exG =  /^(m|M)\s{0,1}(t|t)-\d\d\.\d\d\d-(i|I)\s?(f|F)\s?(t|T)\s?(m|M) Uberlândia(Centro)?$/   // ou ==> /^(M|m)\s?(T|t)-\d{2}.\d{3}-(I|i)\s?(F|f)\s?(T|t)\s?(M|m) Uberlândia(Centro)?$/
                

    if (exG.test(expG))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}
    // função do exercício da letra ==> H
function funcaoH() {
    var expH = document.getElementById("exemploH").value;
    var exH = /^\+\d{1,3}\(\d{2}\)\d{5}-\d{4}$/    // ou ==>  /^\+\d\d\d\?\(\d\d\\)\d\d\d\d\d-\d\d\d\d$/
                
    if (exH.test(expH))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
    // função do exercício da letra  ==> I 
function funcaoI() {
    var expI = document.getElementById("exemploI").value;
    var exI = /^\(\d{1,3}\)\d{5}-\d{4}$/   //  ou  ==> /^\(\d\d\d\)\d\d\d\d\d-\d\d\d\d\$/

    if (exI.test(expI))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}
    // função do exercício da letra  ==> J
function funcaoJ() {
    var expJ = document.getElementById("exemploJ").value;
    var exJ = /^R\$\d{1,3}(.\d{3}){0,3},\d{2}$/;   //  ou ==> /^R\$\d\d\d\?(.\d\d\d\),\d\d$/
              
    if (exJ.test(expJ))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}
    // função do exercício da letra  ==> K
function funcaoK() {
    var expK = document.getElementById("exemploK").value;
    var exK = /^([0][0-9]|[1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9]):([0-9][0-9])$/;   // ou ==>     

    if (exK.test(expK))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}
     // função do exercício da letra ==> L
function funcaoL() {
    var expL = document.getElementById("exemploL").value;
    var exL = /^[\w\._-]{5}&[A-Pa-p]+\.[aeiou]+\.[A-Za-z0-5]*-[^\d]+,\W{2}\.[^ab01]+$/;  // ou ==> 

    if (exL.test(expL))
        alert("Ok ! Está Dentro do padrão");
    else
        alert("Ops ! Não Está Dentro do padrão");
}
