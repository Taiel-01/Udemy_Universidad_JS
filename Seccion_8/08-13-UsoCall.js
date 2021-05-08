let persona1 = {
    nombre: 'Taiel',
    apellido: 'Nunes',
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido
    }
}

let persona2 = {
    nombre: 'Matias',
    apellido: 'Ledezma',
}

//* Uso de call para usar
//* el metodo persona1.nombreCompleto con los datos de persona1
console.log(persona1.nombreCompleto())

console.log(persona1.nombreCompleto.call(persona2));