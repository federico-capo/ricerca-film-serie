import styles from './style.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  // console.log(process.env.API_KEY)
  return (
    <main className={styles.main}>
      <Header />
      <Footer />
    </main>
  )
}
