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
    status: 'idle'
  }

  submitHandler = async (evt) => {
    evt.preventDefault()
    await this.setState({ searchPromt: evt.target.elements.search.value.trim(), page: 1})
    if (!this.state.searchPromt) {
      return
    }
    try {
      this.setState({status: 'pending'})
      const images = await apiFetch(this.state.searchPromt, this.state.page)
      this.setState({ imagesArr: images.data.hits, totalImages: images.data.totalHits, status: 'resolved' })
    } catch (e) {
      this.setState({status: 'rejected'})
    }
  }

  loadMoreImg = async () => {
    await this.setState({ page: this.state.page + 1 })
    try {
      const images = await apiFetch(this.state.searchPromt, this.state.page)
      this.setState(prevState => ({
        imagesArr: [...prevState.imagesArr, ...images.data.hits]
      }));
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
    <div className="container"
      style={{
        color: '#010101'
      }}
    >
        <Searchbar onSubmit={this.submitHandler} />

        {this.state.status === 'idle' ? <p>Test Idle</p>
          : this.state.status === 'pending' ? <Loader />
          : this.state.status === 'resolved' ? <><ImageGallery data={this.state.imagesArr}/>{this.state.totalImages > this.state.imagesArr.length ? <Button loadMore={this.loadMoreImg} />: <p>thats all</p>}</>
          : <p>test rejected</p>}

    </div>
  );
  } 
};
