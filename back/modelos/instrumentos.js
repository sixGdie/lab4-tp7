module.exports = (sequelize, type) => {
  return sequelize.define(
    'instrumento',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      marca: type.STRING,
      modelo: type.STRING,
      imagen: type.STRING,
      precio: type.DECIMAL(10, 2),
      costoEnvio: type.DECIMAL(10, 2),
      cantidadVendida: type.INTEGER,
      descripcion: type.STRING,
    },
    {
      timestamps: false,
    }
  )
}
