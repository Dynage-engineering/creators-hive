import React from 'react'
import Button from './Button'
import FormInput from './FormInput'

const input = [
    {
        name: 'name',
        placeholder: 'Fullname',
        type: 'text',
    },
    {
        name: 'email',
        placeholder: 'Email',
        type: 'email',
    },
    {
        name: 'password',
        placeholder: 'Password',
        type: 'password',
    },
   
]

export default function Signup() {
  return (
      <div>
          {input.map(item =>
          (
              <FormInput key={item.name} {...item} />))
          }
          <Button text="Sign up &rarr;"/>
    </div>
  )
}
