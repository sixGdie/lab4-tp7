const router = require('express').Router()

const apiInstrumentosRouter = require('./api/instrumentos')
const apiInstrumentosMongoRouter = require('./api/instrumentosMongo')

router.use('/instrumentos', apiInstrumentosRouter)
router.use('/instrumentosMongo', apiInstrumentosMongoRouter)

module.exports = router
