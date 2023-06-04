export const ImageGalleryItem = ({image}) => {
  return (
    <li  className="gallery-item">
      <img src={image.webformatURL} huge={image.largeImageURL} alt="" />
    </li>
  )
}