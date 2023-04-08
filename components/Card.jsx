import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Card = ({ title, price, picture }) => {
  return (
    <div className={styles.card}>
      <Image
        loader={() => picture}
        src='/mkit-logo.png'
        alt='Makeitreal Logo'
        width={100}
        height={100}
      />
      <div className={styles.cardText}>
        <p>
          {Number(price.amount).toLocaleString()},{price.decimals}{' '}
          {price.currency}
        </p>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Card
