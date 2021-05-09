//* Funcion contructor de objetos de tipo Persona

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Taiel', 'Nunes', 'tnunes@mail.com');
console.log(padre)

let madre = new Persona('Matias', 'Ledezma', 'mledezma@mail.com')
console.log(madre)

padre.nombre = 'Carlos';

console.log(padre);
console.log(madre);