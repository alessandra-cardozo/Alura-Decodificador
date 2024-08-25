var textInput = document.querySelector("#texto");
var outInput = document.querySelector("#textoConvertido");
var resetar = document.getElementById("textoConvertido").innerHTML;

function criptografar(){
    var texto = textInput.value;

     if (texto.trim() !== ""){
        var resultoCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        document.getElementById('textoConvertido').innerHTML = '<textarea readonly id="texto2">' + resultoCripto + '</textarea>' + '<div class="botoes2">' + '<button class="btnCopiar" id="copiar" onclick="copiar()">Copiar</button>' +  '<button class="btnCopiar" id="copiar" onclick="limpar()">Limpar</button>' + '</div>';
    } else {
        alert("Por favor, insira algum texto para criptografar.");
    }
}

function descriptografar(){
    var texto = textInput.value;

    if (texto.trim() !== ""){
        var resultoCripto = texto.replace(/enter/g, "e" ).replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

        document.getElementById('textoConvertido').innerHTML = '<textarea readonly id="texto2">' + resultoCripto + '</textarea>' + '<div class="botoes2">' + '<button class="btnCopiar" id="copiar" onclick="copiar()">Copiar</button>' +  '<button class="btnCopiar" id="copiar" onclick="limpar()">Limpar</button>' + '</div>';
    } else {
        alert("Por favor, insira algum texto para descriptografar");
    }
}

function copiar() {
    var copiar = document.getElementById('texto2');
    copiar.select();
    document.execCommand('copy');
    alert("Texto copiado.")
}

function limpar() {
    document.getElementById("textoConvertido").innerHTML = resetar;
}