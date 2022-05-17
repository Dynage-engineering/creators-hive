import React from 'react'
import Image from 'next/image'

export default function Domain({to, text, src}) {
  return (
      <div className='domain' onClick={() => console.log(`clicked`)}>
          <div >

          <Image src={`${to}` } alt='Domain' width={360} height={380}/>
          </div>
          <p className='text'>
        { text}
          </p>

          <style jsx>{`
          .domain{
            position: relative;
             width: 360px;
            height: 380px;
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
