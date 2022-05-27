

export default function Button({text, onClick, ...rest}) {
  return (
    <button className='btn' onClick={onClick}>{text}
    
      <style jsx>{`
    .btn{
      background: #18CA87;
      color: #fff;
      padding: 0.8rem 1.5rem;
      border-radius:4px;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      width: 100%;
      transition: all 0.3s;
      font-weight: bold;
  }
  
  .btn:hover{
      background: #000;
      color: #18CA87;
  }
    `}</style>
    </button>
  )
}
