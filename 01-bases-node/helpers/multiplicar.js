const { create } = require("domain");
const fs = require('fs');

const createFileTable = async( base = 1 ) => {
    try {
        console.log('========================');
        console.log('     Tabla del ', base );
        console.log('========================');

        let output = '';
        for(let i = 1; i <= 10; i++) {
            output += `${base} x ${i} = ${ base * i}\n`;
        }

        fs.writeFileSync(`table-${ base }.txt`, output);

        return `table-${ base }.txt`;
    } catch( err ) {
        throw ( err )
    }
}

module.exports = {
    createFileTable,
}