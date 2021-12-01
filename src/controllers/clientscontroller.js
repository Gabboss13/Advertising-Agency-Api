const Clients =  require('../models/Clients')
const DAO = require('../DAO/clientsDAO')
const res = require('express/lib/response')

const clients = (app, bd) => {
const newclientDAO = new DAO(bd)

app.get('/clients', async (req, res)=>{
   try { 
       const response = await newclientDAO.list()
       res.json(response)
       
   } catch (error) {
       res.json(`Impossible d'accéder à la liste des clients enregistrés.`)
   }

})

app.post('/clients', async (req, res) => {
    try { 
        const body = req.body
    
        const newclientsModel = new Clients(body.name, body.email, body.document, body.phone, body.address, body.campaign, body.observations)
        console.log(newclientsModel)

        const response = await newclientDAO.addNew(newclientsModel)
        res.json(response)
        
    } catch (error) {
        res.json(error)
    }

 }) 


app.get('/clients/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    try { 
        const response = await newclientDAO.getById(id)
        res.json(response)
        
    } catch (error) {
        res.json(error)
    }
 
 })


 app.patch('/clients/:id', async (req,res) => {
    const getid = req.params.id
    const values = req.body 
    
    try {
        const responseId = await newclientDAO.getById(getid)
    
        console.log(responseId.clients[0])
        if(responseId.clients){ 
            const updatedClient = new Clients(
                values.name || responseId.clients[0].name,
                values.email || responseId.clients[0].email,
                values.document || responseId.clients[0].document,
                values.phone || responseId.clients[0].phone,
                values.address || responseId.clients[0].address,
                values.campaign || responseId.clients[0].campaign,
                values.observations || responseId.clients[0].observations
            )

            const response = await newclientDAO.alter(getid, updatedClient)
            res.json(response)
        } else{
            res.json({
                "message": `Le client avec l'Id "${getid}" n'existe pas`,
                "error": true
            })
        }
    } catch (error) {
        res.json({
            "message": error.message,
            "error": true
        })
    }
       
    
 })
 
 
 app.delete('/clients/:id', async (req,res) => {
     const id =parseInt(req.params.id)
    try {
        const response = await newclientDAO.deletebyId(id)
        res.json(response)
        
    } catch (error) {
        res.status(404).json(error)
    }
    
    

})

}
 

module.exports = clients


