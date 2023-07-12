import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import {App__video, Video, App__video_overlay_circle } from './style.js';


const Intro = () => {

  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();


  return(

  <App__video>
    <Video
         ref={vidRef}
         src={meal}
         type="video/mp4"
         loop
         controls={false}
         muted 
    /> 
  <div className="app__video-overlay flex__center"
   style={{position: 'absolute', inset: '0', background:'rgba(0,0,0,0.65)'}}>
        <App__video_overlay_circle
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </App__video_overlay_circle>
      </div>
  </App__video>
  )
};

export default Intro;
