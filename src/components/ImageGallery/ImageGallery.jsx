import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Modal } from "components/Modal/Modal"
import { Component } from "react"

export class ImageGallery extends Component {

  state = {
    showModal: false,
    hugeURL: ''
  }

  openModal = (evt) => {
    if (!evt.target.closest('.gallery-item')) {
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
    if (evt.target.classList.contains('overlay')) {
      this.setState({ showModal: false });
      window.removeEventListener("keydown", this.closeModalonESC)
    }
  }

  render() {
    return (
      <>
        <ul onClick={this.openModal}>
          {this.props.data.map((image) => <ImageGalleryItem key={image.id} image={image} />)}
        </ul>
          
        {this.state.showModal && <Modal closeModal={this.closeModalonOverlay} hugeImg={this.state.hugeURL} />}
      </>
   
  )
  } 
}