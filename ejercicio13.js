//convetir de celsius a fahreinheit
function convertirAF(celsius){
    let fahrenheit;
  

    fahrenheit = (celsius*9/5)+32;

    console.log (fahrenheit);
}

convertirAF(30);

// mostrar nivel de temperatura
function temperatura (fahrenheit){
     if (fahrenheit>14 && fahrenheit<32) {
            console.log('temperatura baja')
     }else if (fahrenheit>32 && fahrenheit<68) {
            console.log('temperatura normal')
    }else if (fahrenheit>68 && fahrenheit<96) {
            console.log('temperatura alta')            
    }else{
            console.log('temperatura desconocida')
        }
 }

temperatura(86.5); 

//convertir de fahrenheit a celsius
function convertirAC(fahrenheit){
    let celsius;
  

    celsius = (fahrenheit-32)*5/9;

    console.log (celsius);
    
}

convertirAC(95);