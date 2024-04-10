const valoresConversao = {
    real: {
        euro: 0.19,
        dolar: 0.20,
        simbolo: "R$"
    },
    dolar: {
        real: 4.99,
        euro: 0.92,
        simbolo: "U$D"
    },
    euro: {
        real: 5.40,
        dolar: 1.08,
        simbolo: "EU$"
    }
}






const botaoInverter = document.getElementById("botao-inverter");
botaoInverter.addEventListener("click", inverter);


const botaoConverter = document.getElementById("botao-converter");
botaoConverter.addEventListener("click", converter);


const botaoLimpar = document.getElementById("botao-limpar");
botaoLimpar.addEventListener("click", limpar);


/*document.addEventListener("keydown", function(event) {
console.log(event);
})*/

let valorUsuario = document.getElementById("valorEntrada");
valorUsuario.addEventListener("keypress", function(event){

    console.log(event);

    if (event.ctrlKey == true && event.key == "L") {
        event.preventDefault();
        limpar();
    }

    if (event.ctrlKey == true && event.code == "KeyI"){
        inverter();
    }

    if (event.key == "Enter"){
        event.preventDefault();
       converter(); 
    }
});







//Console.log(valoresConversao)['Real'] ['euro']);

function converter(){

    let valorUsuario = document.getElementById("valorEntrada").value;

    let moeda1 = document.getElementById("moeda1").value;
    let moeda2 = document.getElementById("moeda2").value;

    if (moeda1 == moeda2) {
        alert("As moedas são iguais!!")
        return; 
    }

    if (valorUsuario <= 0 || valorUsuario == "") {
        alert("Verificar valor!")
        return;
    }

    

    let simbolo = valoresConversao[moeda2]["simbolo"];
    //console.log(simbolo);
    
    let resultado = valorUsuario * valoresConversao [moeda1] [moeda2];
    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = simbolo + " " + resultado.toFixed(2);

    //alert(resultado)
    //alert(valoresConversao[moeda1] [moeda2]);

    //alert(valorUsuario);
    //alert (moeda1);
    //alert (moeda2);
}







function limpar() {
    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = "";

    let valorEntrada = document.getElementById("valorEntrada");
    valorEntrada.value = "";

    //alert("Você vai LIMPAR!");
}








function inverter() {
    let valorMoeda1 = document.getElementById("moeda1").value;
    let valorMoeda2 = document.getElementById("moeda2").value;

    document.getElementById("moeda1").value = valorMoeda2;
    document.getElementById("moeda2").value = valorMoeda1;
}