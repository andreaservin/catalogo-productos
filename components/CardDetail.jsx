import Image from 'next/image'
import { Button, Col, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const CardDetail = ({ item }) => {
  return (
    <div className='mb-5'>
      <Row className='p-5'>
        <Col>
          <Image
            loader={() => item.picture.url}
            src='/mkit-logo.png'
            alt='Makeitreal Logo'
            width={Number(item.picture.size.width)}
            height={Number(item.picture.size.heigth)}
          />
        </Col>
        <Col>
          <p className='text-end'>
            {item.condition.toUpperCase()} - {item.sold_quantity} Vendidos
          </p>
          <h5>{item.title}</h5>
          <h4>
            {item.price.currency} {Number(item.price.amount).toLocaleString()},
            {item.price.decimals}
          </h4>
          <div className='d-flex justify-content-center'>
            <Button className='w-75'>Comprar</Button>
          </div>
        </Col>
      </Row>
      <Row className='ps-5 pe-5'>
        <h5>Descripción del Producto</h5>
        <p>{item.description}</p>
      </Row>
    </div>
  )
}

export default CardDetail
