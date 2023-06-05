import css from './Message.module.css'
import PropTypes from 'prop-types';


export const Message = ({ text }) => {
  return (
    <div className={css.message}>
      <p>{text}</p>
    </div>
  )
}

Message.propTypes = {
  text: PropTypes.string
} 