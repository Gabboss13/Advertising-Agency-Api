const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const pathArq = path.resolve(__dirname,'database.db')

const db = new sqlite3.Database(pathArq);



const CLIENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS Clients (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "name" varchar(255), 
    "email" varchar(100), 
    "document" varchar(11), 
    "phone" varchar(50), 
    "address" varchar(250), 
    "campaign" varchar(255), 
    "observations" varchar(255)
    )`;



function createClientsTable() {
    db.run(CLIENTS_SCHEMA, (error)=> {
        if(error) console.log("Erreur lors de la création de la table Clients");
    });
}



db.serialize( ()=> {
    createClientsTable();
});