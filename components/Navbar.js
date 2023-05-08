import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

const Navbar = (props) => {
  

  return (
    <>
      <Cabecalho partidos={props.partidos}/>
      <div className='bg-danger text-align py-3 mb-3 text-center text-white'>
          <h1> {props.titulo} </h1>
      </div>

        <Container>
          {props.children}
        </Container>
          

          <Rodape />
        </>
  )
}

export default Navbar