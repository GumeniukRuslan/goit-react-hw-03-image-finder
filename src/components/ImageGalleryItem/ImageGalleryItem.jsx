import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image }) => {
  return (
    <li id='item' className={css.galleryItem}>
      <img height='200' src={image.webformatURL} huge={image.largeImageURL} alt="" />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired
} 