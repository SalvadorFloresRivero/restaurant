const express = require('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
        this.port = process.env.PORT
    }

    routes(){
        //this.app.use('/api/dishes', require('../routes/dish.routes'))

        // Con use antes del GET...
        //this.app.use('/api', (req, res) => {
            //res.json({'mje':'Hola'})
            //res.status(403).json({'mje':'Hola'}) // Para forzar un estatus
        //})

        this.app.use('/api/dishes', require('../routes/dish.routes'))

    }

    middlewares(){
        // Directorio público
        this.app.use(express.static('public'))
        this.app.use(cors())
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor esta corriendo en el puesto ${this.port}`)
        })
    }
}

module.exports = Server