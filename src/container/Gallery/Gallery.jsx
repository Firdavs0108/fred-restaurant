import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import {App__gallery, App__gallery_content,App__gallery_images} from './style.js';

const Gallery = () =>  {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };


   return  (
       <App__gallery>
          <App__gallery_content>
            <SubHeading title="Instagram" />
            <h1 className="headtext__cormorant">Photo Gallery</h1>
            <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button style={{marginTop: '1rem'}} type="button" className="custom__button">View More</button>
          </App__gallery_content>

          <App__gallery_images>
            <div className="app__gallery-images_container" ref={scrollRef}>
            {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
            </div>

            <div className="app__gallery-images_arrows">
                 <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                 <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
            </div>
          </App__gallery_images>
       </App__gallery>
     );
}
export default Gallery;
