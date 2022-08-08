function start () {
    var buttonCalcularImc = document.querySelector('#button-calcular-imc');
    buttonCalcularImc.addEventListener('click', handleButtonClick);

    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');

    inputPeso.addEventListener('input', handleButtonClick);
    inputAltura.addEventListener('input', handleButtonClick);


    handleButtonClick();
    

}

function calcularImc(peso, altura){
    return (peso / (altura*altura));
}

function handleButtonClick() {
    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');
    var imcResultado = document.querySelector('#imc-resultado');

    var peso = Number(inputPeso.value);
    var altura = Number(inputAltura.value);

   
var imc = calcularImc(peso,altura);

var imcFormatado = imc.toFixed(2).replace('.',',');



classificaTipoImc(imc);

}

function classificaTipoImc (imc) {

    var validaImc = imc;
if(imc >= 16 && imc <= 16.9){
    console.log('Muito abaixo do peso');
}
if(imc >= 17 && imc <= 18.4){
    console.log('Abaixo do peso');
}
if(imc >= 18.5 && imc <= 24.9){
    console.log('Peso normal');
}
if(imc >= 25 && imc <= 29.9){
    console.log('Acima do peso');
}
if(imc >= 30 && imc <= 34.9){
    console.log('Obesidade grau I');
}
if(imc >= 35 && imc <= 40){
    console.log('Obesidade grau II');
}
if(imc > 40){
    console.log('Obesidade grau III');
}else{
    console.log('Valor Inválido');
}

}


 start();