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

//* Uso de apply para usar
//* el metodo persona1.nombreCompleto con los datos de persona1
console.log(persona1.nombreCompleto('Lic', '66778899'))

let arreglo = ['Ing', '55443322']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));