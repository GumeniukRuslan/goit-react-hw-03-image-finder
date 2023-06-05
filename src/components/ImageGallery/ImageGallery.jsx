import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Modal } from "components/Modal/Modal"
import { Component } from "react"
import css from './ImageGallery.module.css'

export class ImageGallery extends Component {

  state = {
    showModal: false,
    hugeURL: ''
  }

  openModal = (evt) => {
    if (!evt.target.closest('#item')) {
      console.log('test')
      return
    }
    window.addEventListener("keydown", this.closeModalonESC);
    this.setState({hugeURL: evt.target.getAttribute('huge'), showModal: true})
  }

  closeModalonESC = (evt) => {
    if (evt.code === 'Escape') {
      this.setState({ showModal: false });
      window.removeEventListener("keydown", this.closeModalonESC)
    }
  }

  closeModalonOverlay = (evt) => {
    if (evt.target.hasAttribute('overlay')) {
      this.setState({ showModal: false });
      window.removeEventListener("keydown", this.closeModalonESC)
    }
  }

  render() {
    return (
      <>
        <ul className={css.imageList} onClick={this.openModal}>
          {this.props.data.map((image) => <ImageGalleryItem key={image.id} image={image} />)}
        </ul>
          
        {this.state.showModal && <Modal closeModal={this.closeModalonOverlay} hugeImg={this.state.hugeURL} />}
      </>
   
  )
  } 
}