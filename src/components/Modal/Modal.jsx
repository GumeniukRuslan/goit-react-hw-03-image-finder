export const Modal = ({hugeImg, closeModal}) => {
  return (
    <div onClick={closeModal} className="overlay">
      <div className="modal">
        <img src={hugeImg} alt="" />
      </div>
    </div>
  )
}