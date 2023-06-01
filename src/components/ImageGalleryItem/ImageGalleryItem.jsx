export const ImageGalleryItem = ({image}) => {
  return (
    <li class="gallery-item">
      <img src={image.webformatURL} alt="" />
    </li>
  )
}