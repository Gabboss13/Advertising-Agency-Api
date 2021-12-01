const app = require('./src/app.js')
const PORT = process.env.PORT || 3000  



    app.listen(PORT, ()=>{

    console.log(`Le serveur s'exécute sur le PORT ${PORT}`)

})




