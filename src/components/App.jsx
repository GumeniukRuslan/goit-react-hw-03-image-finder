import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { apiFetch } from "./Api/Api";

export class App extends Component  {

  state = {
    searchPromt: '',
    page: 1
  }

  submitHandler = (evt) => {
    evt.preventDefault()
    this.setState({ searchPromt: evt.target.elements.search.value.trim() })
  }

  render() {
    return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <Searchbar onSubmit={this.submitHandler} />


    </div>
  );

  } 
};
