const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const pathArq = path.resolve(__dirname,'database.db')

const bd = new sqlite3.Database(pathArq);


process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD fermé!');
        process.exit(0);
    })
);

module.exports = bd;