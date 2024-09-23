import React from 'react';
import './Gallery.scss';

const photos = [
    { src: 'https://findandfollow.com.ua/wp-content/uploads/2021/12/036.jpg', alt: 'Photo 1', gridArea: '1 / 1 / 3 / 3' },
    { src: 'https://mus.pl.ua/tour/wp-content/uploads/2021/06/muzej-poltava-1.jpg', alt: 'Photo 2', gridArea: '1 / 3 / 2 / 4' },
    { src: 'https://findandfollow.com.ua/wp-content/uploads/2021/12/IMG_0012--scaled.jpg', alt: 'Photo 3', gridArea: '2 / 3 / 3 / 4' },
    { src: 'https://upload.wikimedia.org/wikipedia/uk/b/b5/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D1%96%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9.jpg', alt: 'Photo 4', gridArea: '3 / 1 / 4 / 2' },
    { src: 'https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/12419_800x600_0_98d61_550a69ff_XL.jpg', alt: 'Photo 5', gridArea: '3 / 2 / 5 / 4' },
    { src: 'https://travels.in.ua/api/Photo/PhotoStreamCPOI/33256', alt: 'Photo 6', gridArea: '4 / 1 / 5 / 2' },
  ];

function PhotoGallery() {
    return (
      <div className='gallery-container'>
        <div className="photo-gallery">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          style={{ gridArea: photo.gridArea }}
          className="gallery-img"
        />
      ))}
      </div>
      </div>
    )
}

export default PhotoGallery;