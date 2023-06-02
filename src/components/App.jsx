import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { apiFetch } from "./Api/Api";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

export class App extends Component  {

  state = {
    searchPromt: '',
    page: 1,
    imagesArr: [],
    totalImages: 0,
    status: false
  }

  submitHandler = async (evt) => {
    evt.preventDefault()
    await this.setState({ searchPromt: evt.target.elements.search.value.trim(), page: 1, status: true })
    if (!this.state.searchPromt) {
      return
    }
    try {
      const images = await apiFetch(this.state.searchPromt, this.state.page)
      this.setState({ imagesArr: images.data.hits, totalImages: images.data.totalHits })
    } catch (e) {
      console.log(e)
    } finally {
      this.setState({status: false})
    }
  }

  loadMoreImg = async () => {
    await this.setState({ page: this.state.page + 1 })
    try {
      const images = await apiFetch(this.state.searchPromt, this.state.page)
      this.setState({ imagesArr: [...this.state.imagesArr, ...images.data.hits]})
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
    <div
      style={{
        color: '#010101'
      }}
    >
        <Searchbar onSubmit={this.submitHandler} />
        {this.state.searchPromt && <ImageGallery data={this.state.imagesArr} />}
        {this.state.totalImages > this.state.imagesArr.length && <Button loadMore={this.loadMoreImg} />}
        {this.state.status && <Loader />}

    </div>
  );

  } 
};
