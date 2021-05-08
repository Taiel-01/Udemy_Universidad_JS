class Persona {

    static contadorObjetosPersona = 0; //atributo de nuestra clase

    email = 'Valor default email'; //atributo de nuestros objetos

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa contador: ' + Persona.contadorObjetosPersona)
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

// persona1.saludar() No es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);


console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);