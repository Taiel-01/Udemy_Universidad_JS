//? async indica que una funcion regresa una promesa

async function miFuncionConPromesa() {
    return 'saludos con primesa y async'
}
miFuncionConPromesa().then(valor => console.log(valor));