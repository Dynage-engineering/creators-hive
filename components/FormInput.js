export default function FormInput({placeholder,name, onChange,...rest}) {
    return (
        <div className="formInput">
          <input
              placeholder={placeholder}
              name={name}
              onChange={onChange}
                {...rest}
            />
        &rarr;
        <style jsx>{`
        .formInput{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0.8rem;
          background: #f2f2f2;
          border-radius: 5px;
          margin: 1rem 0;
          width: 320px;
          border: 2px solid #ddd;
          transition: all 0.3s;
      }
      
      .formInput input{
          border: none;
          width: 100%;
          background: transparent;
          outline: none;
          padding: 0;
          font-size: 1rem;
          margin: 0;
      }
      .formInput:focus-within{
        border: 2px solid #18CA87;
      }
      
        `}</style>
      </div>
  )
}
