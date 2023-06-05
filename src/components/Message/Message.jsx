import css from './Message.module.css'

export const Message = ({ text }) => {
  return (
    <div className={css.message}>
      <p>{text}</p>
    </div>
  )
}