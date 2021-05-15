import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SignUpForm from '../Components/AccountComponents/SignUp'
import ListProducts from '../Components/ProductComponents/showProductList'
import HeroHeader from '../Components/StrapiComponents/HeroHeader'
import getHeroHeaders from '../apiCalls/StrapiFunctions/GetHeroHeaders'
import Navbar from '../Components/ThemeComponents/nav'
// import Producthero from '../Components/StrapiComponents/ProductHero'

<<<<<<< HEAD
export default function Home() {
=======
export default

  function Home() {
  // useEffect(async () => {
  //   let {data} = await getHeroHeaders()
  //   console.log(data)
  // }, [])
>>>>>>> origin/gh-pages
  return (
    <div className={styles.container}>
      <Head>
        <title>Roshi Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <SignUpForm/> */}
        <Navbar />
        {/* <Producthero /> */}
        <HeroHeader />
        <HeroHeader variant='rightAlign' />
        <HeroHeader />
      </main>
      <ListProducts />
      <footer className={styles.footer}>

      </footer>
    </div>
  )

}
