let miFuncion = function () {
    console.log('saludos desde mi funcion');
}


// const miFuncionFlecha = () => {
//     console.log('saludos desde mi funcion flecha')
// }

//* const miFuncionFlecha = () => console.log('saludos desde mi funcion flecha')

// miFuncionFlecha();

//* const saludar = () => {
//*     return 'Saludos esde funcion flecha'
//* }

const saludar = () => 'Saludos esde funcion flecha';

console.log(saludar())

const regresaObjeto = () => ({ nombre: 'Taiel', apellido: 'Nunes' });
console.log(regresaObjeto());


const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje)
}

//* const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);


// const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
};


console.log(funcionConVariosParametros(3,5))

funcionConParametrosClasico('saludos con parametros clasico')
funcionConParametros('saludos con parametros')