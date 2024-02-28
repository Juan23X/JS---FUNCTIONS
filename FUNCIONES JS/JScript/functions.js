//Arrow function 

//Sin parametros

const funcionSinParametros = () => {
    console.log("Cantidad de parámetros: ");
};




//2 PARAMETROS

let number1 = 4;
let number2 = 6;

let multiplicar = (num1, num2) => {
    const resultado = num1 * num2;
    console.log(num1 + " multiplicado por " + num2 + " es igual a: " + resultado);
};

multiplicar(number1, number2);
  


  
//3 PARAMETROS

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;

let calcularPromedio = (nota1, nota2, nota3) => {
  const promedio = (nota1 + nota2 + nota3) / 3;
  console.log(`El promedio de las notas es: ${promedio}`);
};
calcularPromedio(nota1, nota2, nota3);
  

  
  








//3 function CONST


const CincoAlCubo = (numero) => {
    const numero = 5;
    return numero * numero;
};





const imprimirApellido = (apellido) => {
    console.log(apellido);
};
+
imprimirApellido("Gómez");




const triplicarNumero = (numero) => {
    return numero * 3;
};

const numeroEjemplo = 5;
console.log(triplicarNumero(numeroEjemplo));





//5 arrow function LET


let textoOne = 'ALICIA';
let textoTwo = 'EN EL PAIS DE LAS MARAVILLAS';


let combinarTexto = (textoOne, textoTwo) => {
    return textoOne + ' ' + textoTwo;
};


console.log(combinarTexto(textoOne, textoTwo));










let numero1 = 15;
let numero2 = 8;


let realizarOperacion = (numero1, numero2) => {
    return (numero1 - numero2) * 10;
};


console.log(realizarOperacion(numero1, numero2));










let baseRectangulo = 8;
let alturaRectangulo = 5;


let calcularAreaRectangulo = (base, altura) => {
    return base * altura;
};


console.log(calcularAreaRectangulo(baseRectangulo, alturaRectangulo));








let numero = 17;


let obtenerResiduo = (numero) => {
    return numero % 3;
};


console.log(obtenerResiduo(numero));










let numeroEjemplo5 = 30;


let operacionCompuesta = (numero) => {
    return numero / 2 + 10;
};


console.log(operacionCompuesta(numeroEjemplo5));








































