const { Router } = require('express')
const router = Router()

const { dishesGet, dishesPost, dishesPut, dishesDelte } = require('../controllers/dish.controller')

// Con use antes del GET...
        //this.app.use('/api', (req, res) => {
            //res.json({'mje':'Hola'})
            //res.status(403).json({'mje':'Hola'}) // Para forzar un estatus
        //})

        router.get('/', dishesGet)

        router.post('/', dishesPost)

        router.put('/', dishesPut)

        router.delete('/', dishesDelte)

module.exports = router





/*
 router.get('/', (req, res) => {
            res.json({'mje':'get'}) // Para forzar un estatus
        })

        router.post('/', (req, res) => {
            res.json({'mje':'post'}) // Para forzar un estatus
        })

        router.put('/', (req, res) => {
            res.json({'mje':'put'}) // Para forzar un estatus
        })

        router.delete('/', (req, res) => {
            res.json({'mje':'delete'}) // Para forzar un estatus
        })
 */