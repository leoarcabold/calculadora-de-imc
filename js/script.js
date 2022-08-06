function start () {
    var buttonCalcularImc = document.querySelector('#button-calcular-imc');
    buttonCalcularImc.addEventListener('click', handleButtonClick());
}

function calculateImc(peso, altura){
    return (peso / (altura*altura));
}

function handleButtonClick() {
    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');
console.log(inputPeso);
console.log(inputAltura);
}

 start();