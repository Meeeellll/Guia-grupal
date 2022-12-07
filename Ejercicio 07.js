/**Crear una fuction que calcule la edad de una persona
 *  en base a su año de nacimiento y fecha actual podrá 
 * hacer uso de métodos JavaScript
 *  (DATE,getDate,getFullYear)para realizar el cálculo */

 function calcularEdad(){
    let fechaActual = new Date();
    let fechaNacimiento = new Date("2001-02-10")
    console.log(fechaActual);
    console.log(fechaNacimiento);
    
    console.log(fechaNacimiento.getFullYear());
    let edad =fechaActual.getFullYear()-fechaNacimiento.getFullYear();
    console.log("Usted tiene "+ edad + " anios")
    
    }
    
    calcularEdad()