let promesa = new Promise((resolver) => {

    console.log('inicio promesa')
    setTimeout(() => resolver('saludos con promesa y timeout'), 3000)
    console.log('fin promesa')

});

promesa.then(valor => console.log(valor));