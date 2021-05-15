import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SignUpForm from '../Components/AccountComponents/SignUp'
import ListProducts from '../Components/ProductComponents/showProductList'
import HeroHeader from '../Components/StrapiComponents/HeroHeader'
import getHeroHeaders from '../apiCalls/StrapiFunctions/GetHeroHeaders'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roshi Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      {/* <SignUpForm/> */}
        <HeroHeader />
        <HeroHeader variant='rightAlign'/>
        <HeroHeader />
      </main>
      <ListProducts/>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )

}
