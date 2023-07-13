import { styled } from "styled-components";

const App__gallery = styled.div`
    display: flex;
    flex-direction: row;
    background: var(--color-black);
    padding: 4rem 0 4rem 6rem;
`

const App__gallery_content = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-width: 500px;
    padding-right: 2rem;
`


const App__gallery_images = styled.div`
    
`


export {App__gallery, App__gallery_content,  App__gallery_images}


//  5:30:01