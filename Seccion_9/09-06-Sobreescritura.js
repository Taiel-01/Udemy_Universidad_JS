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

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }
    // Sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this.departamento;
    }
}


let persona1 = new Persona('Taiel', 'Nunes');
console.log(persona1); //get nombre

let empleado1 = new Empleado('Mati', 'Ledezma', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());


