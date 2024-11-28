var setadireita = window.document.getElementById("setadireita");
var leonardo = window.document.getElementById("leonardo");
var bruna = window.document.getElementById("bruna");
var setaesquerda = window.document.getElementById("setaesquerda");
var samantha = window.document.getElementById("samantha");


function DeslizarParaDireita(){
    leonardo.style="display:none;"
    bruna.style="display:flex;"
    samantha.style="display:flex;"
    setadireita.style="display:none;"
    setaesquerda.style="display:flex; margin-top:50px;"
}

function DeslizarParaEsquerda(){
    leonardo.style="display:flex;"
    bruna.style="display:flex;"
    samantha.style="display:none;"
    setadireita.style="display-flex; margin-top:50px;"
    setaesquerda.style="display:none;"
}