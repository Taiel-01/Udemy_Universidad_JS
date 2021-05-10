function miFuncion1() {
    console.log('funcion 1');
}

function miFuncion2() {
    console.log('funcion 2');
}


// Funcion tipo callback
let imp = function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imp);

// Llamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log('saludo asincrono 1 despues de 3 seg');
}

setTimeout(miFuncionCallback, 3000); //despues de 3 seg

setTimeout(function(){console.log('saludo asincrono 2')}, 4000)

setTimeout(() => console.log('saludo asincrono 3'), 1000);