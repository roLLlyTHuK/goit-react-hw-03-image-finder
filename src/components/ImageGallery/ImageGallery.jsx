import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends React.Component {
  render() {
    const { images, onImageClick } = this.props;
    return (
      <ul className="ImageGallery">
        {images.map((image) => (
          <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
        ))}
      </ul>
    );
  }
}

