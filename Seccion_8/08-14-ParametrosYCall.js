let persona1 = {
    nombre: 'Taiel',
    apellido: 'Nunes',
    nombreCompleto: function (titulo, tel) {
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Matias',
    apellido: 'Ledezma',
}

//* Uso de call para usar
//* el metodo persona1.nombreCompleto con los datos de persona1
console.log(persona1.nombreCompleto('DevWeb', '44332211'))

console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero', '11223344'));