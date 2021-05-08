let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function () {
        return this.nombre + this.apellido;
    }
}


//*Concatenar cada valor de una propiedad
console.log(persona.nombre + ', ' + persona.apellido);

//*for in 
for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//*otras formas de imprimir
let personaArray = Object.values(persona)
console.log(personaArray)

let personaString = JSON.stringify(persona);
console.log(personaString)