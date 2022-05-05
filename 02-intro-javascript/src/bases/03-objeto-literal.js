const person = {
    nombre: 'John',
    apellido: 'Doe',
    ead: 30,
    direccion: {
        calle: 'Calle falsa 123',   
        ciudad: 'Ciudad falsa', 
        pais: 'Pais falso',  
        lat: '123',
        log: '456'
    }


};

console.table({person});

// Clonar no hacer!1

/*const person2 = person;

person2.nombre = 'Jane'; 

console.log(person2);*/


// Clonar de manera correcta

const person2 = {...person};

person2.nombre = 'Jane'; 

console.table(person2);
