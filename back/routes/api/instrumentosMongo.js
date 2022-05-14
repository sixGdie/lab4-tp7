const router = require('express').Router()
const mongoose = require('mongoose')
//const Sequelize = require('sequelize');
//const Op = Sequelize.Op;

const { Instrumento } = require('../../db')

const url = 'mongodb://localhost/lab4tp6'

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .catch(() => console.log('Conexión exitosa'))
  .then((e) => console.log('Conexión fallida: ' + e))

const instrumentoSchema = mongoose.Schema(
  {
    nombre: String,
    marca: String,
    modelo: String,
    imagen: String,
    precio: Number,
    costoEnvio: Number,
    cantidadVendida: Number,
    descripcion: String,
  },
  { versionKey: false }
)

const InstrumentoModel = mongoose.model('instrumentos', instrumentoSchema)

router.get('/', async (req, res) => {
  const instrumentos = await InstrumentoModel.find()
  res.json(instrumentos)
})

router.get('/:id', async (req, res) => {
  const instrumento = await InstrumentoModel.find({ _id: req.params.id })
  res.json(instrumento)
})

router.get('/busqueda/:nombre', async (req, res) => {
  const instrumento = await InstrumentoModel.find({
    nombre: {
      $regex: req.params.nombre + '/i',
    },
  })
  res.json(instrumento)
})

router.post('/', async (req, res) => {
  const instrumento = new InstrumentoModel({
    nombre: req.body.nombre,
    marca: req.body.marca,
    modelo: req.body.modelo,
    imagen: req.body.imagen,
    precio: req.body.precio,
    costoEnvio: req.body.costoEnvio,
    cantidadVendida: req.body.cantidadVendida,
    descripcion: req.body.descripcion,
  })
  await instrumento.save()
  res.json(instrumento)
})

router.put('/:id', async (req, res) => {
  await InstrumentoModel.updateOne(
    { _id: req.params.id },
    {
      $set: {
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        imagen: req.body.imagen,
        precio: req.body.precio,
        costoEnvio: req.body.costoEnvio,
        cantidadVendida: req.body.cantidadVendida,
        descripcion: req.body.descripcion,
      },
    }
  )
  res.json({ success: 'Instrumento actualizado' })
})

router.delete('/:id', async (req, res) => {
  await InstrumentoModel.deleteOne({ _id: req.params.id })
  res.json({ success: 'Instrumento eliminado' })
})

module.exports = router
