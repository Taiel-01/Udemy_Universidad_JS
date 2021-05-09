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

    //* Sobreescribiendo el metodo de la clase padre (Object)
    toString() {
        //? Se aplica polimorfismo (Muiltiples formas en tiempo de ejecucion)
        //? El metodo que se ejecuta depende si es una referencia de tipo padre
        //? o de tipo hijo
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); //llamar al constructor de la clase padre
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
console.log(persona1.toString()); //get nombre

let empleado1 = new Empleado('Mati', 'Ledezma', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());


