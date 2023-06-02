import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { nanoid } from "nanoid"

export const ImageGallery = ({data}) => {
  return (
    <ul>
      {data.map(image => <ImageGalleryItem key={nanoid()} image={image} />)}
    </ul>
  )
}