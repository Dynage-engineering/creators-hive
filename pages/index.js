import Head from 'next/head'
import Image from 'next/image'
import Signup from '../components/Signup'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1>Improve your digital skills with hands-on real life exercise</h1>
        <p>Be the world change maker that you are, with hands-on exercises, all for free.
          <br />
          <br />
          Sign up now!</p>
        <Signup/>
      </main>
     
    </div>
  )
}
