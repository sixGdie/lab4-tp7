import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { resolveModuleNameFromCache } from 'typescript'
import { getInstrumentosPorIdFetch, saveInstrumento } from './FuncionesApi'
import { Navigation } from './Navigation'
import Instrumento from './Instrumento'

export const FrmInstrumento = () => {
  const navigate = useNavigate()

  const { idinstrumento } = useParams()
  const [instrumento, setInstrumento] = useState<Instrumento>(new Instrumento())

  const getInstrumento = async () => {
    if (Number(idinstrumento) !== 0) {
      let instrumentoSelect: Instrumento = await getInstrumentosPorIdFetch(
        Number(idinstrumento)
      )
      setInstrumento(instrumentoSelect)
    } else {
      let instrumentoSelect: Instrumento = new Instrumento()
      setInstrumento(instrumentoSelect)
    }
  }

  useEffect(() => {
    getInstrumento()
  }, [])

  const save = async () => {
    console.log(instrumento.nombre)
    await saveInstrumento(instrumento)
    navigate('/grilla')
  }

  return (
    <>
      <Navigation></Navigation>
      <div className='center'>
        <Form className='form-control'>
          <Form.Group className='mb-3' controlId='formBasicNombre'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='Text'
              placeholder='Ingrese el nombre'
              defaultValue={instrumento?.nombre}
              onChange={(e) => (instrumento.nombre = String(e.target.value))}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicMarca'>
            <Form.Label>Marca</Form.Label>
            <Form.Control
              type='Text'
              placeholder='Ingrese la marca'
              defaultValue={instrumento?.marca}
              onChange={(e) => (instrumento.marca = String(e.target.value))}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicModelo'>
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              type='Text'
              placeholder='Ingrese el modelo'
              defaultValue={instrumento?.modelo}
              onChange={(e) => (instrumento.modelo = String(e.target.value))}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicImagen'>
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type='Text'
              placeholder='Ingrese la imagen'
              defaultValue={instrumento?.imagen}
              onChange={(e) => (instrumento.imagen = String(e.target.value))}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPrecio'>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type='Text'
              placeholder='Ingrese el precio'
              defaultValue={instrumento?.precio}
              onChange={(e) => (instrumento.precio = Number(e.target.value))}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCostoEnvio'>
            <Form.Label>Costo Envio</Form.Label>
            <Form.Control
              type='Text'
              placeholder='Ingrese el costo de envío'
              defaultValue={instrumento?.costoEnvio}
              onChange={(e) =>
                (instrumento.costoEnvio = String(e.target.value))
              }
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCantidadVendida'>
            <Form.Label>Camtidad Vendida</Form.Label>
            <Form.Control
              type='Text'
              placeholder='Ingrese la cantidad vendida'
              defaultValue={instrumento?.cantidadVendida}
              onChange={(e) =>
                (instrumento.cantidadVendida = Number(e.target.value))
              }
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicDescripción'>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type='Text'
              placeholder='Ingrese la descripción'
              defaultValue={instrumento?.descripcion}
              onChange={(e) =>
                (instrumento.descripcion = String(e.target.value))
              }
            />
          </Form.Group>
          <br />

          <br />
          <br />
          <Button onClick={save} variant='primary' type='button'>
            Guardar
          </Button>
        </Form>
      </div>
    </>
  )
}
