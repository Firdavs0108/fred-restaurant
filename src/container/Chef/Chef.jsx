import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import {App__chef_content,P,Img2, App__chef_content_quote, Img, App__chef_sign} from './style.js';


const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
         <img src={images.chef} alt="chef_image" />
    </div>

    <div className="app__wrapper_info">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What we believe in</h1>


         <App__chef_content>
            <App__chef_content_quote>
                <Img src={images.quote} alt="quote_image" />
                <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
            </App__chef_content_quote>
            <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
         </App__chef_content>

        <App__chef_sign>
              <P>Kevin Luo</P>
              <P className="p__opensans">Chef & Founder</P>
              <Img2 src={images.sign} alt="sign_image" />
        </App__chef_sign>
    </div>
  </div>
);

export default Chef;
