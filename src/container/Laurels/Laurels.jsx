
import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import {App__laurels_awards_card, Img, App__laurels_awards_card_content, App__laurels_awards} from './style.js';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <App__laurels_awards>
    <Img src={imgUrl} alt="awards" />
    <App__laurels_awards_card_content>
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </App__laurels_awards_card_content>
  </App__laurels_awards>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
         <SubHeading title="Awards & recognition" />
         <h1 className="headtext__cormorant">Our Laurels</h1>

         <App__laurels_awards_card>
             {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
         </App__laurels_awards_card>

      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
  </div>
);


// 5:16:10

export default Laurels;
