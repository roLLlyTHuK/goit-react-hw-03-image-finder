import React from 'react';

export class ImageGalleryItem extends React.Component {
  render() {
    const { image, onClick } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={() => onClick(image.largeImageURL)}>
        <img className='ImageGalleryItem-image' src={image.webformatURL} alt="" />
      </li>
    );
  }
}

