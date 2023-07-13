import { styled } from "styled-components";

const App__gallery = styled.div`
    display: flex;
    flex-direction: row;
    background: var(--color-black);
    padding: 4rem 0 4rem 6rem;
   
    @media screen and (max-width: 1150px) 
    {
        flex-direction: column;
    }

    @media screen and (max-width: 850px) {
        padding: 4rem 0 4rem 4rem;
    }

    @media screen and (max-width: 650px) {
        padding: 4rem 0 4rem 2rem;
    }  
    
`

const App__gallery_content = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-width: 500px;
    padding-right: 2rem;

    @media screen and (min-width: 2000px) {
        min-width: 1000px;
        padding-right: 4rem;
    }

    @media screen and (max-width: 650px) {
        min-width: 100%;
    }


`


const App__gallery_images = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    max-width: 50%;
    position: relative;

    @media screen and (max-width: 1150px) 
    {
        max-width: 100%;
        margin: 5rem 0;
    }

`

const App__gallery_images_container = styled.div`
    display: flex;
    flex-direction: row;
    width: max-content;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none; 

    &::-webkit-scrollbar {
        display: none;
    }
`;

const App__gallery_images_card = styled.div`
    position: relative;
    min-width: 301px;
    height: 447px;
    margin-right: 2rem;

    @media screen and (min-width: 2000px) {
     min-width: 400px;
    height: 547px;
    }

    @media screen and (max-width: 650px) {
    min-width: 240px;
     height: 320px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: 0.5s ease;

    &:hover {
    opacity: 0.35;
    }
`

const App__gallery_images_arrows = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;
    position: absolute;
    bottom: 5%;
    

`
const Gallery__image_icon = styled.div`
    position: absolute;
    color: #fff;
    font-size: 2rem;
    opacity: 0;
    transition: .5s ease;
    cursor: pointer;
    &:hover {
        color: var(--color-white);
    }

`




export {App__gallery, App__gallery_images_arrows, Img, App__gallery_content, App__gallery_images_card, App__gallery_images_container,  App__gallery_images}


//  5:30:01