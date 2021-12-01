const res = require('express/lib/response')

class Register{

constructor(bd) {
    this.bd = bd
}

    addNew(newClient) {

            const sql = `INSERT INTO Clients (name, email,document, phone, address, campaign, observations)
            VALUES 
            (?,?,?,?,?,?,?)`

            console.log('Entrei no DAO')
            return new Promise ((resolve, reject )=>{
                this.bd.run(sql, [newClient.name, newClient.email, newClient.document, newClient.phone, newClient.address, newClient.campaign, newClient.observations], (error)=>{
                    if (error){
                        reject ({
                            "message": error.message,
                            "error": true
                        })
                    }else{
                        resolve({
                            "clients": newClient,
                            "error": "New customer successfully registered!/ Nouveau client enregistré avec succès !"
                        })
                    }  
                })
            })
               

    }

    list(){
         const sql = "SELECT * FROM Clients"
        
        return new Promise ((resolve, reject )=>{
            this.bd.all(sql, (error, rows)=>{
                if (error){
                    reject ({
                        "message": error.message,
                        "error": true
                    })
                }else{
                    resolve({
                        "clients": rows,
                        "count": rows.length,
                        "error": "List of registered clients!/ Liste des clients enregistrés dans le système !"
                    })
                }
            })
        })
    }

    getById(id){
        const sql = `SELECT * FROM Clients WHERE ID=?` 

        console.log("ça va?")
        return new Promise ((resolve,reject)=>{
            this.bd.all(sql, id, (error, rows)=>{
                if(error) {
                    reject({
                        "message": error.message,
                        "error": true
                    })
                }else{
                    resolve({
                        "clients":rows,
                        "error": `ID's ${id} client/ Client avec l'Id ${id}`
                    })
                }
            })
        })

        
    }

    alter(id,newClient) {
       
        const sql = 'UPDATE Clients SET NAME = ?, EMAIL = ?, DOCUMENT =?, PHONE = ?, ADDRESS = ?, CAMPAIGN = ?, OBSERVATIONS = ?  WHERE ID=?'

        try {
            console.log(id)
            return new Promise ((resolve, reject)=>{
                this.bd.run(sql, [newClient.name, newClient.email, newClient.document, newClient.phone, newClient.address, newClient.campaign, newClient.observations, id], (error)=>{
                    if(error){
                        reject({
                            "error": error.message,
                            "erro": true
                        })
                    }else{
                        resolve({
                            "clients": newClient, 
                            "error": `Client with ID 1 ${id} has been updated successfully!/ Le client avec l'ID ${id} a été mis à jour dans la base d'enregistrement.`
                        })
                    }
                })
        })
        } catch (error) {
            throw new Error (error.message)
        }
        


    } 

    deletebyId(id, res) {
         const sql = 'DELETE FROM Clients WHERE id=?'
         
         return new Promise((resolve,reject)=>{
             this.bd.run(sql, id, (error)=>{
                 if(error){
                     reject(errror.message)
                 }else{
                     resolve({
                        "message": `The client with id ${id} was deleted from the registration system./ Id tâche ${id} supprimé de la base d'enregistrement`
                     })
                 }
             })
         })

        

       
    }
}

module.exports = Register