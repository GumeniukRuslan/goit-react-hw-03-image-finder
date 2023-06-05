import css from './Modal.module.css'

export const Modal = ({ hugeImg, closeModal }) => {
  return (
    <div overlay='true' onClick={closeModal} className={css.overlay}>
      <div className={css.modal}>
        <img src={hugeImg} alt="" />
      </div>
    </div>
  )
}