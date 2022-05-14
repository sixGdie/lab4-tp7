import Instrumento from './Instrumento'

export async function getInstrumentosJSONFetch() {
  let urlServer = 'http://localhost:3001/api/instrumentos/'
  let response = await fetch(urlServer, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors',
  })
  console.log(response)
  return await response.json()
}

export async function getInstrumentosPorIdFetch(id: number) {
  let urlServer = 'http://localhost:3001/api/instrumentos/' + id
  let response = await fetch(urlServer, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors',
  })
  console.log(response)
  return (await response.json()) as Instrumento
}

export async function getInstrumentosPorBusqueda(termino: String) {
  let urlServer = 'http://localhost:3001/api/instrumentos/busqueda/' + termino
  let response = await fetch(urlServer, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors',
  })
  console.log(response)
  return await response.json()
}

export async function deleteInstrumentoPorId(id: number) {
  console.log('Eliminar Instrumento ID ' + id)
  let urlServer = 'http://localhost:3001/api/instrumentos/' + id
  await fetch(urlServer, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors',
  })
}

export async function saveInstrumento(instrumento?: Instrumento) {
  let urlServer = 'http://localhost:3001/api/instrumentos'
  let method: string = 'POST'
  if (instrumento && instrumento.id > 0) {
    urlServer = 'http://localhost:3001/api/instrumentos/' + instrumento?.id
    method = 'PUT'
  }
  await fetch(urlServer, {
    method: method,
    body: JSON.stringify(instrumento),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
