/**Crear una Fuction para calcular el descuento en viajes turísticos
 *  tomando en cuenta lo siguiente: Si el usuario introduce como origen
 *  la ciudad de Palma y como destino La costa del Sol, el descuento será 
 * de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
 *  es Puerto el Triunfo el descuento será del 15%. */

 function viajesTuristicos(costo_viaje) {
    var ciudadOrigen = 'San Salvador'
    if(ciudadOrigen == 'Palma'){
        var destino= 'Puerto El Triunfo'
        switch (destino) {

            case 'Costa del Sol':
                var descuento 
                descuento= costo_viaje*0.05
                console.log('La ciudad de origen del usuario es: '+ciudadOrigen)
                console.log('La ciudad de destino seleccionada por el usuario es: '+destino)
                console.log('La ciudad destino seleccionada posee un descuento del 5%, esto equivale a: $'+ descuento+ ' de descuento en su presupuesto')
                break;

                case 'Panchimalco':
                var descuento 
                descuento= costo_viaje*0.10
                console.log('La ciudad de origen del usuario es: '+ciudadOrigen)
                console.log('La ciudad de destino seleccionada por el usuario es: '+destino)
                console.log('La ciudad destino seleccionada posee un descuento del 10%, esto equivale a: $'+ descuento+ ' de descuento en su presupuesto')
                break;

                case 'Puerto El Triunfo':
                var descuento 
                descuento= costo_viaje*0.15
                console.log('La ciudad de origen del usuario es: '+ciudadOrigen)
                console.log('La ciudad de destino seleccionada por el usuario es: '+destino)
                console.log('La ciudad destino seleccionada posee un descuento del 15%, esto equivale a: $'+ descuento+ ' de descuento en su presupuesto')

                
                break;
        
            default: console.log("Su ciudad de origen no está seleccionada para el servicio de descuentos")
                break;
        }



    }else{ console.log("Su ciudad de origen no está seleccionada para el servicio de descuentos")
       
    }
    
}

viajesTuristicos(100)