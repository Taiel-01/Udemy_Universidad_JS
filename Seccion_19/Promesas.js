let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false;
    if (expresion)
        resolver('Resolvio correcto');
    else
        rechazar('Se produjo un error')
});

miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);

miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));



