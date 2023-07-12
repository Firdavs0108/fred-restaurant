import { styled } from "styled-components";

const App__chef_content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin-top: 5rem;
`

const App__chef_content_quote = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`

const Img = styled.img`
    width: 47px;
    height: 40px;
    margin: 0 1rem 1rem 0;
`

const App__chef_sign = styled.div`
    width: 100%;
    margin-top: 3rem;
`

const P = styled.p`
    font-family: var(--font-base);
    font-weight: 400;
    font-size: 32px;
    line-height: 41.6px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    color: var(--color-golden);
`

const Img2 = styled.img`
    width: 250px;
    margin-top: 3rem;
    @media screen and (min-width: 2000px) {
        width: 370px;  
    }

    @media screen and (max-width: 450px) {
        width: 80%;
    }
`







export { App__chef_content, Img2, App__chef_content_quote,P, Img, App__chef_sign }