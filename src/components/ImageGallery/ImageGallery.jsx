import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({data}) => {
  return (
    <ul>
      {data.map((image) => <ImageGalleryItem key={image.id} image={image} />)}
    </ul>
  )
}