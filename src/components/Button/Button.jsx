import css from './Button.module.css'

export const Button = ({ loadMore }) => {
  return (
    <button className={css.button} onClick={loadMore}>Load more</button>
  )
}