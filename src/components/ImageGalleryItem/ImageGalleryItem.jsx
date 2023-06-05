import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ image }) => {
  return (
    <li id='item' className={css.galleryItem}>
      <img height='200' src={image.webformatURL} huge={image.largeImageURL} alt="" />
    </li>
  )
}