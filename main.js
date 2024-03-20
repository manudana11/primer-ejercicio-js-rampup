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

// parte objetos

const coche = {
    marca: 'BMW',
    modelo: 'Serie 1',
    matricula: '0473MDP',
};

const casa = {
    codPostal: 46111,
    calle: 'Gran via Marques del Turia',
    portal: 40,
    piso: 8,
};

const FullStackDeveloper = {
    lenguajes: ['javascript', 'php', 'python'],
    proyectos: ['mi pagina personal', 'pimera carta', 'ejercicio resposive'],
};

const perro = {
    nombre: 'bob',
    raza: 'pastor belga',
    color: 'negro y fuego',
    edad: 8,
};

const noticia = {
    titular: 'Fin de las fallas',
    cuerpo: 'Las fallas se terminaron ayer',
};

const persona = {
    nombre: 'Manuel',
    apellido: 'Dana',
    edad: 26,
};

console.log(persona.nombre);

console.log(FullStackDeveloper.lenguajes[0]);

const portatil = {
    marca: 'PcCom',
};

console.log(portatil.marca);

const concierto = {
    grupos: ['grupo 1', 'grupo 2', 'grupo 3'],
};

console.log('grupos', concierto.grupos);

const led = {
    lampara1: 'rojo',
    lampara2: 'verde',
    lampara3: 'azul',
};

let rgb = Object.values(led);

console.log('rgb', rgb);

const O_Error = {
    código: 'HELP!',
};

console.log(O_Error);

const Grupo = {
    integrantes: ['Pedro', 'Lucas', 'Quique', 'Raimundo'],
};

console.log(Grupo.integrantes[1]);

const impresora = {
    tinta: {
        rojo: 30,
        verde: 60,
        azul: 90,
    }
};

let nivelesTinta = impresora.tinta;

console.log(nivelesTinta);

const Movil = {
    especificaciones: ['120GB', '5G', '4K'],
};

let especificaciones = Movil.especificaciones;

console.log(especificaciones);

portatil.marca = 'MSI';

console.log(portatil.marca);

concierto.grupos.push('Guns N` Roses');

console.log(concierto.grupos);

concierto.fecha = '1 de diciembre';

concierto.fecha = new Date();

console.log(concierto.fecha);

Grupo.integrantes.splice(0, 1)

console.log(Grupo.integrantes);

console.log(Grupo.integrantes.length);