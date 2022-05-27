import Head from 'next/head'
import Image from 'next/image'
import AllDomains from '../components/domains'
import Signup from '../components/Signup'

export default function Home() {
  return (
    <div>
      <main className='main'>
        <h1>Improve your digital skills with hands-on real life exercise</h1>
        <p>Be the world change maker that you are, with hands-on exercises, all for free.
          <br />
          <br />
          Sign up now!</p>
        <Signup />
        <AllDomains/>
      </main>
      <style jsx>{`
     
.main {

  margin:2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
.main h1{
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .main h1{
    font-size: 3.5rem;
  }
  .main p{
    font-size: 1.5rem;
  }
}
     `}</style>
    </div>
  )
}
