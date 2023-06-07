import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { Modal } from "components/Modal/Modal"
import { Component } from "react"
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css'

export class ImageGallery extends Component {

  state = {
    showModal: false,
    hugeURL: ''
  }

  static propTypes = {
        data: PropTypes.array.isRequired,
    }


  openModal = (evt) => {
    window.addEventListener("keydown", this.closeModalonESC);
    this.setState({hugeURL: evt.currentTarget.getAttribute('huge'), showModal: true})
  }

  closeModalonESC = (evt) => {
    if (evt.code === 'Escape') {
      this.setState({ showModal: false });
      window.removeEventListener("keydown", this.closeModalonESC)
    }
  }

  closeModalonOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.setState({ showModal: false });
      window.removeEventListener("keydown", this.closeModalonESC)
    }
  }

  render() {
    return (
      <>
        <ul className={css.imageList} >
          {this.props.data.map((image) => <ImageGalleryItem modalOpen={this.openModal} key={image.id} image={image} />)}
        </ul>
          
        {this.state.showModal && <Modal closeModal={this.closeModalonOverlay} hugeImg={this.state.hugeURL} />}
      </>
   
  )
  } 
}