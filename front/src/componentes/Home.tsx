import { useEffect, useState } from 'react'
import {
  getInstrumentosJSONFetch,
  getInstrumentosPorBusqueda,
} from './FuncionesApi'
import { ItemInstrumento } from './ItemInstrumento'
import { Navigation } from './Navigation'
import Instrumento from './Instrumento'
import { Alert, Button, Card, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export const Home = () => {
  const { termino } = useParams()

  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([])

  const getInstrumentos = async () => {
    console.log('TERMINO ' + termino)
    if (termino && termino != '') {
      let datos: Instrumento[] = await getInstrumentosPorBusqueda(termino)
      setInstrumentos(datos)
    } else {
      let datos: Instrumento[] = await getInstrumentosJSONFetch()
      setInstrumentos(datos)
    }
  }

  useEffect(() => {
    getInstrumentos()
  }, [])

  return (
    <>
      <Navigation></Navigation>
      <Container fluid='md'>
        <Row>
          {instrumentos.map((instrumento: Instrumento) => (
            <ItemInstrumento
              key={instrumento.id}
              id={instrumento.id}
              instrumento={instrumento.nombre}
              marca={instrumento.marca}
              modelo={instrumento.modelo}
              imagen={instrumento.imagen}
              precio={instrumento.precio}
              costoEnvio={instrumento.costoEnvio}
              cantidadVendida={instrumento.cantidadVendida}
              descripcion={instrumento.descripcion}
            ></ItemInstrumento>
          ))}
        </Row>
      </Container>
    </>
  )
}
