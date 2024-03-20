// alert('JavaScript funciona correctamente')

// parte variables

let variableSinValor;

let booleano1 = true;
let booleano2 = false;

const pi = 3.1416;
const tau = 2 * pi;

console.log('tau',tau);

const miNombre = 'Manuel';

const miNumeroFav = 11;

console.log(`Mi nombre es ${miNombre} y mi numero favorito es el ${miNumeroFav}`);

let frase1 = 'Seré un crack en JavaScript al terminar el bootcamp';

console.log(frase1.toUpperCase());

let crack = 'Hola soy un crack';

console.log(crack.slice(0, 4));

let numeroFavEscrito = miNumeroFav.toString();

console.log('numeroFavEscrito', typeof numeroFavEscrito);

let miDeporteFav = 'Golf';

let meGustaJugarAl = `Me gusta jugar al ${miDeporteFav} los domingos`;

console.log('fraseGolf', meGustaJugarAl);

console.log('pi redondeado', pi.toFixed(2));

// parte arrays

let arrayVacio = [];

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let arrayNumerosPares = [0, 2, 4, 6, 8];

let arraNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

let holaMundo = ['Hola', 'Mundo'];

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

console.log(loGuardoTodo)

let arrayDeArray = [[726, 'nombre'], [225, 'apellido'], [298, 'direccion']];

console.log(loGuardoTodo.length);

loGuardoTodo.push('pascual');

console.log(loGuardoTodo);

console.log(loGuardoTodo[1]);

loGuardoTodo.push('Euralio')

console.log(loGuardoTodo);