const { createFileTable } = require('./helpers/multiplicar') ;
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true, 
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    default: false,

                })
                .check( (argv, options ) => {
                    if( isNaN ( argv.base ) ) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;


console.clear();

//console.log(argv);

//console.log('base: yargs', argv.base);

/* ====================SIN YARGS=================*/
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5] = arg3.split('=');
/* ==============================================*/


createFileTable( argv.base, argv.list )
    .then( nameFile => console.log(nameFile, ' fue creado con exito'))
    .catch( err => console.log( err ));

/* ==================teFile===============================*/
// fs.writeFile(`tabla-${ base }.txt`, output, ( err ) => {
//     if ( err ) throw err;
//     console.log(`tabla-${ base }.txt fue creado con exito`);
// })