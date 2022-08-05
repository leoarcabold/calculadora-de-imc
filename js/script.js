function start (){

    var buttonCalculateImc = document.querySelector('#button-calculate-imc')

    console.log(buttonCalculateImc);
}

function calculateImc(weight, heith){
    return (weight / (heith*heith));
}

 start();