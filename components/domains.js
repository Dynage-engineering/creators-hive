import React from 'react'
import Domain from './Cards/Domain'
import Image from 'next/image'

const Domains = [
    {
        name: 'Software Development',
        image: '/sample.png',
        to: '/software/'
    },
    {
        name: 'Finance',
        image: '/sample.png',
        to: '/finance/'
    },
    {
        name: 'Design',
        image: '/sample.png',
        to: '/design/'
    },
    {
        name: 'IoT & Robotics',
        image: '/sample.png',
        to: '/robotics/'
    },
]
export default function AllDomains() {
  return (
      <div className='allDomains'>
          <h1>Kickstart your career in your preferred domains</h1>
          <div className='container'>
          {
              Domains.map((domain, index) =>
              { 
                  return (
                     

                    <div className='domain' onClick={() => console.log(`${domain.to}`)}>
                    <div >
          
                    <Image src={`${domain.image}` } alt='Domain' width={300} height={320}/>
                    </div>
                    <p className='text'>
                  { domain.name}
                          </p>
                    </div>
                      
                  )
              })
          }
          </div>
          <style jsx>{`
            .allDomains{
            margin-top: 2rem;
          display: flex;
          flex-direction: column;
            align-items: center;
            justify-content: center;
          width: 100vw;
          padding-top: 2rem;
            }
            .allDomains h1{
            color: #18CA87;
            text-align: center;
            margin-bottom: 2rem;
            }
            .container{
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                gap: 1rem;
            }
            .domain{
                position: relative;
                 width: 300px;
                height: 320px;
                overflow: hidden;
                border-radius: 10px;
                cursor: pointer;
            }
            .domain:hover{
    box-shadow: 2px 4px 8px rgba(0,0,0,0.2);
            }
            .text {
                font-size: 1.2rem;
                padding: 1rem;
                width: 100%;
                font-weight: bold;
                position: absolute;
                bottom: 0;
                color: #222;
                left: 0;
                text-align: center;
                background-color: #18CA87;
                color: #222;
                transition: all 0.3s;
            }
          ` }</style>
    </div>
  )
}
