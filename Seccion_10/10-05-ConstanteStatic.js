class Persona {

    static contadorPersonas = 0; //atributo de nuestra clase

    static get MAX_OBJ() {
        return 5;
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.id_persona = ++Persona.contadorPersonas;
        } else {
            console.log('Se han superado el maximo de objetos permitidos')
        }
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
        return this.id_persona + ' ' + this.nombre + ' ' + this.apellido;
    }

    //* Sobreescribiendo el metodo de la clase padre (Object)
    toString() {
        //? Se aplica polimorfismo (Muiltiples formas en tiempo de ejecucion)
        //? El metodo que se ejecuta depende si es una referencia de tipo padre
        //? o de tipo hijo
        return this.nombreCompleto();
    }

    static saludar() {
        console.log("Saludos desde metodo Static")
    }

    static saludar2(persona) {
        console.log(persona.nombre + ' ' + persona.apellido)
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
console.log(persona1.toString())

let empleado1 = new Empleado('Mati', 'Ledezma', 'Sistemas');
console.log(empleado1.toString())

console.log(Persona.contadorPersonas)

let persona2 = new Persona('Karla', 'Ramirez');
console.log(persona2.toString())
console.log(Persona.contadorPersonas)

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Armando', 'Toledo');
let persona5 = new Persona('Laura', 'Quintero');
console.log(persona5.toString())
