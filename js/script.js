function start() {
    var buttonCalcularImc = document.querySelector('#button-calcular-imc');
    buttonCalcularImc.addEventListener('click', handleButtonClick);

    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');

    inputPeso.addEventListener('input', handleButtonClick);
    inputAltura.addEventListener('input', handleButtonClick);

    handleButtonClick();

}


function handleButtonClick() {
    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');
    var imcResultado = document.querySelector('#imc-resultado');

    var peso = Number(inputPeso.value);
    var altura = Number(inputAltura.value);


    var imc = calcularImc(peso, altura);

    var imcFormatado = imc.toFixed(2).replace('.', ',');
    imcResultado.textContent = imcFormatado;

    classificaTipoImc(imc);

}

function calcularImc(peso, altura) {
    return (peso / (altura * altura));
}

function classificaTipoImc(imc) {

    let msgImc = document.querySelector('#msg-imc');

    console.log(imc);

    if (imc < 16) {
        msgImc.innerHTML = "<strong>Valor Inválido</strong>";
    } if (imc >= 16 && imc <= 16.9) {
        msgImc.innerHTML = "Este valor considera que você esta na faixa <strong>Muito Abaixo Do Peso</strong>";
    } if (imc >= 17 && imc <= 18.4) {
        msgImc.innerHTML = "Este valor considera que você esta na faixa <strong>Abaixo Do Peso</strong>";
    } if (imc >= 18.5 && imc <= 24.99) {
        msgImc.innerText = "Este valor considera que você esta na faixa <strong>Peso Normal</strong>";
    } if (imc >= 25 && imc <= 29.99) {
        msgImc.innerHTML = "Este valor considera que você esta na faixa <strong>Acima Do Peso</strong>"
    } if (imc >= 30 && imc <= 34.99) {
        msgImc.innerHTML = "Este valor considera que você esta na faixa <strong>Obesidade Grau I</strong>";
    } if (imc >= 35 && imc <= 40) {
        msgImc.innerHTML = "Este valor considera que você esta na faixa <strong>Obesidade Grau II</strong>";
    } if (imc > 40) {
        msgImc.innerHTML = "Este valor considera que você esta na faixa <strong>Obesidade Grau III</strong>";
    }
}

    start();