import Link from 'next/link'
import Card from '../../components/Card'
import styles from '../../styles/Home.module.css'

const Items = ({ data }) => {
  return (
    <div className={styles.container}>
      {data ? (
        data.map(({ id, title, price, picture }, key) => (
          <Link key={key} href={`/item/${id}`}>
            <Card
              id={id}
              title={title}
              price={price}
              picture={picture}
            />
          </Link>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}

export default Items
