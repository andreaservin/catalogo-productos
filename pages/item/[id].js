import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AxiosWrapper from '../api/AxiosWrapper'
import styles from '../../styles/Home.module.css'
import NavBar from '../../components/NavBar'
import Link from 'next/link'
import CardDetail from '../../components/CardDetail'

const Item = () => {
  const router = useRouter()
  const { id } = router.query

  const [data, setData] = useState(null)

  useEffect(() => {
    AxiosWrapper.get(`/items/${id}`)
      .then(({ data }) => {
        console.log(data)
        setData(data)
      })
      .catch((error) => {
        setData(null)
      })
  }, [])

  return (
    <>
      <div className={styles.main}>
        <NavBar />
        <div className={styles.back}>
          <Link href='/'>{'\u003C'} Volver</Link>
        </div>

        <div className={styles.container}>
          {data ? <CardDetail item={data?.item} /> : <h2>Loading...</h2>}
        </div>
      </div>
    </>
  )
}

export default Item
