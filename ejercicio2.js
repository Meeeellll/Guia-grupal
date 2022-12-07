/*Crear 3 Fuctions que calcule 2 números enteros y muestre en consola el resultado de la suma, resta,
multiplicación y división. Puede utilizar parámetros o variables locales para asignar valores a los
números.*/

function sumar(){
    let a= 5;
    let b= 10;
    let suma = a + b;
    console.log("El resultado de la suma es: " + suma);
}

function resta(a,b){
    let resta = a-b;
    console.log("El resultado de la resta es: " + resta);
}

function multiplicar(a,b){
    let multiplicar = a*b;
    console.log("El resultado de la multiplicacion es de: " + multiplicar);
}

function division(a,b){
    let division = a/b;
    console.log("El resultado de la division es: " + division);
}
sumar();

resta(5,2);
multiplicar(10,2);
division(30,6);