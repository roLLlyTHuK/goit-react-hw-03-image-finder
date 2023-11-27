import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import {Loader2} from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchImages } from './Services/Services';
// import styles from './styles.css';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: '',
  };

  async fetchImagesWrapper() {
    const { query, page } = this.state;
    if (query !== '') {
      
      try {
        this.setState({ isLoading: true });
        const newImages = await fetchImages(query, page);
        if (newImages.length === 0) {
          alert("We're sorry, but you've reached the end of search results for images")
        } else{
            this.setState((prevState) => ({
            images: [...prevState.images, ...newImages],
            page: prevState.page + 1,
          }));
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        this.setState({ isLoading: false });
      }
    } else {
      alert("Please enter a search term");
      return
    }
  }

  handleSearchSubmit = (query) => {
    this.setState({ query, page: 1, images: [] }, this.fetchImagesWrapper);
  };

  handleLoadMore = () => {
    this.fetchImagesWrapper();
  };

  handleImageClick = (imageUrl) => {
    this.setState({ showModal: true, selectedImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader2 />}
        {images.length > 0 && !isLoading && <Button onClick={this.handleLoadMore} />}
        {showModal && <Modal isOpen={showModal} image={selectedImage} onClose={this.handleCloseModal} />}
      </div>
    );
  }
}

