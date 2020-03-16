// destructuring
// spread operator
// resto operator

const size = {
    width: 4,
    height: 5,
    length: 2,
}

/// HAY UNA FORMA DE HACER ESTO, QUE SE LLAMA DESTRUCTURING - DESTRUCTURAR
const width = size.width;
const height = size.height;
const length = size.length;

const volume = size.width * size.height * size.length;

const msg = `
Tamaño de la caja
Ancho: ${width}
Alto: ${height}
Largo: ${length}
`
/// SINTAXIS DE DESTRUCTURING
const { width, height, length } = size /// "Creame las variables width, height y lenght, con los valores de cada una de esas propiedades del objeto size"
// El objeto es una estructura de datos. Destructurar es "desarmarlo". Del objeto que tenemos, agarramos cada una de sus key, creamos variables con esos key, y le asignamos sus valores

// Puedo cambiar los nombres de las variables
const { width: ancho, height: alto, length: largo } = size;

// puedo darle un valor por default, en caso de que no exista
const { width: ancho = 0}
