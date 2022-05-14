import { useEffect, useState } from 'react'
import { ItemInstrumento } from './ItemInstrumento'
import { Navigation } from './Navigation'
import Instrumento from './Instrumento'
import { Alert, Button, Card, Col, Container, Nav, Row } from 'react-bootstrap'

export const HomePosta = () => {
  return (
    <>
      <Navigation></Navigation>
      <Container fluid='md'>
        <Row>
          Musical Hendrix es una tienda de instrumentos musicales con ya más de
          15 años de experiencia. Tenemos el conocimiento y la capacidad como
          para informarte acerca de las mejores elecciones para tu compra
          musical.
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
