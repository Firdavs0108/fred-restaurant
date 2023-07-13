import { styled } from "styled-components";

const App__video = styled.div`
      height: 100vh;
      position: relative;
`

const Video = styled.video`
      width: 100%;
      height: 100%;
      object-fit: cover;
`

const App__video_overlay_circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* border: 1px solid var(--color-golden); */
    cursor: pointer;
`





export {App__video, Video, App__video_overlay_circle}