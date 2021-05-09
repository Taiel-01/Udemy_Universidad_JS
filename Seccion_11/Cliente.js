class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(fechaRegistro) {

        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorClientes;

    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(_fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `
                ${super.toString()}
                ${this._idCliente}
                ${this._fechaRegistro}`;
    }
}