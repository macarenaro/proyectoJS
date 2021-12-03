let nombre = prompt("Bienvenido a Ruta 40. Ingrese su nombre");
let destino = +prompt("Ingrese el numero del destino. 1-Costa Atlántica. 2-Bariloche. 3-Cataratas");
let pasajeros= +prompt("Indique número de pasajeros");

function viaje(){
        
        switch (destino) {
            case 1:
                return pasajeros * 17000;
                break
            case 2:
                return pasajeros * 40000;
                break
            case 3:
                return pasajeros * 35000;
                break   
            default:
                alert ("Error. Vuela a cargar la página")  
    }
}
let total= alert("El total de su viaje es $"+ viaje());
alert ("Gracias "+nombre+" por comprar en Ruta 40.")





// do{
// let destino = +prompt("Ingrese el numero del destino. 1-Costa Atlántica. 2-Bariloche. 3-Cataratas");
// let pasajeros= +prompt("Indique número de pasajeros");
// }while (detistino>3)

// function viaje(){
        
//     switch (destino) {
//         case 1:
//             return pasajeros * 17000;
//             break
//         case 2:
//             return pasajeros * 40000;
//             break
//         case 3:
//             return pasajeros * 35000;
//             break   
//     }
// }
// let total= alert("El total de su viaje es $"+ viaje());
// alert ("Gracias "+nombre+" por comprar en Ruta 40.")

/*
if(destino > 3 ){
    alert ("Error en el ingreso de datos");
    

}
else{
    function viaje(){
        
        switch (destino) {
            case 1:
                let total = alert("El total de su viaje es $"+ (pasajeros*20000));
                break
            case 2:
                let total =  alert("El total de su viaje es $"+ (pasajeros*30000));
                break
            case 3:
                let total =  alert("El total de su viaje es $"+ (pasajeros*40000));
                break   
            default:
                alert ("Error. Vuela a cargar la página");
        }
    }
    
    alert ("Gracias "+nombre+" por comprar en Ruta 40.");
}*/