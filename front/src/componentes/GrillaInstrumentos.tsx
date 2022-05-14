import { useEffect, useState } from 'react'
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { DetalleInstrumento } from './DetalleInstrumento'
import { useNavigate, useParams } from 'react-router-dom'
import {
  deleteInstrumentoPorId,
  getInstrumentosJSONFetch,
  getInstrumentosPorIdFetch,
} from './FuncionesApi'
import { Navigation } from './Navigation'
import Instrumento from './Instrumento'

export const GrillaInstrumentos = () => {
  const navigate = useNavigate()

  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([])

  const getInstrumentos = async () => {
    let datos: Instrumento[] = await getInstrumentosJSONFetch()
    setInstrumentos(datos)
  }

  useEffect(() => {
    getInstrumentos()
  }, [])

  const deleteInstrumento = async (idInstrumento: number) => {
    await deleteInstrumentoPorId(idInstrumento)
    window.location.reload()
  }

  return (
    <>
      <Navigation></Navigation>
      <Container fluid='md'>
        <br />
        <Button href={`/formulario/0`} variant='outline-primary'>
          Nuevo
        </Button>
        <Row>
          <Col md={1}>
            <b>ID</b>
          </Col>
          <Col md={3}>
            <b>Nombre</b>
          </Col>
          <Col md={2}>
            <b>Marca</b>
          </Col>
          <Col md={2}>
            <b>Modelo</b>
          </Col>
          <Col md={2}>
            <b>Precio</b>
          </Col>
          <Col md={2}>
            <b>Costo Envío</b>
          </Col>
          <Col md={2}>
            <b>Cantidad Vendida</b>
          </Col>
          <Col md={2}>
            <b>Descripción</b>
          </Col>
          <Col md={2}>
            <b>Modificar</b>
          </Col>
          <Col md={2}>
            <b>Eliminar</b>
          </Col>
        </Row>
        {instrumentos.map((instrumento: Instrumento) => (
          <Row key={instrumento.id}>
            <Col md={1}>{instrumento.id}</Col>
            <Col md={3}>{instrumento.nombre}</Col>
            <Col md={2}>{instrumento.marca}</Col>
            <Col md={2}>{instrumento.modelo}</Col>
            <Col md={2}>{instrumento.precio}</Col>
            <Col md={2}>{instrumento.costoEnvio}</Col>
            <Col md={2}>{instrumento.cantidadVendida}</Col>
            <Col md={2}>{instrumento.descripcion}</Col>
            <Col md={2}>
              <Button
                variant='outline-warning'
                href={`/formulario/` + instrumento.id}
              >
                Modificar
              </Button>
            </Col>
            <Col md={2}>
              <Button
                variant='outline-danger'
                onClick={(e) => deleteInstrumento(instrumento.id)}
              >
                Eliminar
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}
