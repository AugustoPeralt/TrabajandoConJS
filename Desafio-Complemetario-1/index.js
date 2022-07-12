
let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?")

    if(edad>=18){
    
    if(time>= 2 && time<7 && !free) {
        alert("Podes pasar gratis porque sos la primer persona despues de las 2");
        free = true;
    } else{
    alert(`Son las ${time}:00hs y podes pasar, pero tenes que pagar la entrada`)
    }

    } else{
        alert("No podes pasar, sos menor")
    }
    }

validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(5);
validarCliente(7);
