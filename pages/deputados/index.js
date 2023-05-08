import Link from 'next/link';
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import apiDeputados from '../../services/apiDeputados';
import Navbar from '@/components/Navbar';

const index = ({ deputados }) => {

  return (
    <Navbar titulo='Deputados'>

      <Row md={6}>
        {deputados.map(item => (
          <Col key={item.id}>
          <Link href={'/deputados/' + item.id}>
            <Card style={{marginBottom: "20px"}}>
              <Card.Img src={item.urlFoto} />
            </Card>
          </Link>  
          </Col>
        ))}

      </Row>

    </Navbar>
  )
}

export default index

export async function getServerSideProps(context) {
  const resultado = await apiDeputados.get("/deputados")
  const deputados = resultado.data.dados

  return {
    props: {
      deputados,
    }
  }
}