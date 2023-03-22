const { create } = require("domain");
const fs = require('fs');
const colors = require('colors');

const createFileTable = async( base = 1, listar ) => {
    try {
        

        let output = '';
        for(let i = 1; i <= 10; i++) {
            output += `${base} ${ 'x'.cyan } ${i} ${ '='.cyan } ${ base * i}\n`;
        }

        if( listar )
        {
            console.log('========================'.cyan);
            console.log(`     ${ 'Tabla del'.red } `, colors.red(base) );
            console.log('========================'.cyan);
            console.log(output);
        } else {
            fs.writeFileSync(`table-${ base }.txt`, output);
        }

        return `table-${ base }.txt`;
    } catch( err ) {
        throw ( err )
    }
}

module.exports = {
    createFileTable,
}