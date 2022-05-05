// Desestructuración 
// Asignación Desestructurada

const persona = {
    nombre: 'Juan',
    edad: 28,
    profesion: 'Desarrollador Web',
    musica: 'Rock',
}

//const { nombre, edad, profesion, musica } = persona;

/*console.log(nombre);
console.log(edad);
console.log(profesion);
console.log(musica);*/

const userContext = ({ clave, nombre, edad, profesion, musica, rango = 'capitan'}) => {
    //console.log(nombre, edad, profesion, musica, rango );
    return {
        nombreClave: clave,
        anios: edad,
        masdatos: {
            profesion: profesion,
            musica: musica,
            rango: rango
        }
    }
}

//const aveger = userContext(persona); 

// Desestructuración

const { nombreClave, anios, masdatos:{profesion, musica} } = userContext (persona);

console.log(nombreClave, anios);
console.log(profesion, musica);
