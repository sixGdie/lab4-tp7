import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { getInstrumentosPorIdFetch } from './FuncionesApi'
import { Navigation } from './Navigation'
import Instrumento from './Instrumento'
import { Col, Container, ListGroup, Nav, Row } from 'react-bootstrap'

export const DetalleInstrumento = () => {
  const { idinstrumento } = useParams()
  const [instrumento, setInstrumento] = useState<Instrumento>()

  let instrumentoId: number = 0

  const getInstrumento = async () => {
    let instrumentoSelect: Instrumento = await getInstrumentosPorIdFetch(
      Number(instrumentoId)
    )
    setInstrumento(instrumentoSelect)
  }

  useEffect(() => {
    if (idinstrumento) {
      instrumentoId = parseInt(idinstrumento)
    }
    getInstrumento()
  }, [])

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Row>
          <Col>
            <br />
            <img
              alt='instrumento'
              className='minAltoImg'
              src={'http://localhost:3000/img/' + instrumento?.imagen}
            />
          </Col>
          <Col>
            <Row>
              <Col>
                <h3>{instrumento?.cantidadVendida}</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>{instrumento?.nombre}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>${instrumento?.precio}</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                Marca: <h3>{instrumento?.marca}</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                Modelo: <h3>{instrumento?.modelo}</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                Costo Envío: <h3>{instrumento?.costoEnvio}</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                Descripción: <h3>{instrumento?.descripcion}</h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Nav.Link href='/'>
              <h3>Volver</h3>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}
