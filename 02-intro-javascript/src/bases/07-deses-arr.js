// Desestrurando de Arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , p2 ] = personajes;

console.log(p2);  

// Retornar un arreglo

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numero] = retornaArreglo();

console.log(letras, numero);

// Tarea
// 1. Valor del arreglo nombre
// 2. Valor del arreglo setNombre
const useState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

//const arr = useState('Hola');

//arr[1]();

const [ nombre, setNombre] = useState('goku');

console.log(nombre);
setNombre();