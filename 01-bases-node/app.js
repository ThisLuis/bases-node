
const { createFileTable } = require('./helpers/multiplicar') ;

console.clear();

const base = 5;

createFileTable( base )
    .then( nameFile => console.log(nameFile, ' fue creado con exito'))
    .catch( err => console.log( err ));


// fs.writeFile(`tabla-${ base }.txt`, output, ( err ) => {
//     if ( err ) throw err;
//     console.log(`tabla-${ base }.txt fue creado con exito`);
// })