class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre
    }
}

let persona1 = new Persona('Taiel', 'Nunes');
persona1.nombre = 'Matias Ledezma' //set nombre('Matias Ledezma')
console.log(persona1.nombre); //get nombre