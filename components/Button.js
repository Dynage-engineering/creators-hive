import btnStyle from '../styles/FormInput.module.css'

export default function Button({text, onClick, ...rest}) {
  return (
      <button className={btnStyle.btn} onClick={onClick}>{ text}</button>
  )
}
