function start () {
    var buttonCalcularImc = document.querySelector('#button-calcular-imc');
    buttonCalcularImc.addEventListener('click', handleButtonClick());
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
    var imcFormatado = toFixed(2);
var imc = calcularImc(peso,altura);
imcResultado.textContent = imc;

}

 start();