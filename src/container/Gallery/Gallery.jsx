import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import {App__gallery, App__gallery_content, App__gallery_images_arrows, Img,App__gallery_images, App__gallery_images_card, App__gallery_images_container} from './style.js';

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
            <button style={{marginTop: '2rem'}} type="button" className="custom__button">View More</button>
          </App__gallery_content>

          <App__gallery_images>
            <App__gallery_images_container ref={scrollRef}>
            {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <App__gallery_images_card key={`gallery_image-${index + 1}`}>
              <Img src={image} alt="gallery_image" />
             
                <BsInstagram style={{color:'white', position:'absolute', fontSize:'2rem', opacity:'0', transition:'.5s ease', cursor:'pointer' }}/>
    
            </App__gallery_images_card>
          ))}
            </App__gallery_images_container>

            <App__gallery_images_arrows>
                 <BsArrowLeftShort style={{color:'var(--color-golden)', fontSize:'2rem', cursor:'pointer', background:'var(--color-black)', borderRadius:'5px'}} className="gallery__arrow-icon" onClick={() => scroll('left')} />
                 <BsArrowRightShort style={{color:'var(--color-golden)', fontSize:'2rem', cursor:'pointer', background:'var(--color-black)', borderRadius:'5px'}} className="gallery__arrow-icon" onClick={() => scroll('right')} />
            </App__gallery_images_arrows>
          </App__gallery_images>
       </App__gallery>
     );
}
export default Gallery;
