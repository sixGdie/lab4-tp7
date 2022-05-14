import { useState } from 'react'

import Instrumento from './Instrumento'
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap'

type InstrumentoParams = {
  id: number
  instrumento: string
  marca: string
  modelo: string
  imagen: string
  precio: number
  costoEnvio: string
  cantidadVendida: number
  descripcion: string
}

export const ItemInstrumento = (args: InstrumentoParams) => {
  return (
    <>
      <br></br>
      <br></br>
      <Card style={{ width: '18rem' }} className='margenesTarjeta'>
        <Card.Img
          variant='top'
          className='maxAltoImg'
          src={'http://localhost:3000/img/' + args.imagen.toLowerCase()}
        />
        <Card.Body>
          <Card.Title>{args.instrumento}</Card.Title>
          <Card.Text>${args.precio}</Card.Text>
          <Card.Text>Costo Envío: {args.costoEnvio}</Card.Text>
          <Card.Text>{args.cantidadVendida} vendidos</Card.Text>
          <Button href={`detalle/${args.id}`} variant='primary'>
            Detalle
          </Button>
        </Card.Body>
      </Card>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}
