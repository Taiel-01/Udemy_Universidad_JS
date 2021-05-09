const persona = {
    nombre: 'Taiel',
    apellido: 'Nunes'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Mati';
    p1.apellido = 'Ledezma';
}


//* Paso por referencia
cambiarValorObjeto( persona );
console.log( persona );