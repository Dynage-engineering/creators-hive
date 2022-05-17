import React from 'react'
import formStyle from '../styles/FormInput.module.css'


export default function FormInput({placeholder,name, onChange,...rest}) {
    return (
        <div className={ formStyle.formInput}>
          <input
              placeholder={placeholder}
              name={name}
              onChange={onChange}
                {...rest}
            />
            &rarr;
      </div>
  )
}
