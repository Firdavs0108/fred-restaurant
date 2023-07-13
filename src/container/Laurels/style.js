import { styled } from "styled-components";

const App__laurels_awards_card = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 230px;
    margin: 1rem;
    flex-wrap: wrap;

    @media screen and (min-width: 1900px) {
        min-width: 390px;
    }

    @media screen and (max-width: 450px) {
        min-width: 100%;
        margin: 1rem 0;
    }

`
const Img = styled.img`
    width: 50px;
    height: 50px;
`


const App__laurels_awards = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;

`

const App__laurels_awards_card_content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`




export {App__laurels_awards_card, Img, App__laurels_awards, App__laurels_awards_card_content}


// 5:21:53