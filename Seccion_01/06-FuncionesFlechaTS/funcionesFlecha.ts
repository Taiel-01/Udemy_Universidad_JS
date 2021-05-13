let suma = function( a:number, b:number) {
    return a + b;
};

console.log(suma(5,3))

let sumaFlecha = (a:number, b:number) => {
    return a + b;
}

console.log(sumaFlecha(3,2))

var obtenetNombre = function(){
    return "Juan Perez";
}

let obtenetNombreFlecha = () => "Taiel Nunes";

console.log(obtenetNombreFlecha());