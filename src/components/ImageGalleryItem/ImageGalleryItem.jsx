export const ImageGalleryItem = ({image}) => {
  return (
    <li  className="gallery-item">
      <img height='200' src={image.webformatURL} huge={image.largeImageURL} alt="" />
    </li>
  )
}