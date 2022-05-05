// Funciones en JS

/*const saludar = function (nombre) {
    return `Hola ${nombre}`;
}*/


// Funciones flecha


/*const saludar2 = (nombre) => {  
    return `Hola ${nombre}`;
}*/

// Simplificando

const saludar3 = (nombre) => `Hola ${nombre}`;


console.log(saludar3('hola'));


// Funciones mas usadas en React

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});


const user = getUser();

console.log(user);


// Tarea
// 1. Trsformar la funcion getUser en una funcion flecha
// 2. Retornar un objeto implicito
// 3. Probar la funcion

/*function getUsuarioActivo (nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('El_Papi1502');
console.table(getUsuarioActivo);*/


// Rresolución

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});


const userActivo = getUsuarioActivo('El_Papi1502');
console.log(userActivo);
