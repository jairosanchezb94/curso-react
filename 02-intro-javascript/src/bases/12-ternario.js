// Operarios ternarios 

const activo = true;

/*let mensaje = '';

if (activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}*/

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//const mensaje = (activo) ? 'Activo' : null;

// Forma corta de hacer un if
const mensaje = !activo && 'Activo'; 


console.log(mensaje);