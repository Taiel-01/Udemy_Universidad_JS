class Persona {

    static contadorPersonas = 0; //atributo de nuestra clase

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        this.id_persona = ++Persona.contadorPersonas;
        Persona.contadorObjetosPersona++;
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
console.log(persona1.toString()); //get nombre

let empleado1 = new Empleado('Mati', 'Ledezma', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
