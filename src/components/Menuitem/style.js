import { styled } from "styled-components";


const App__menuitem = styled.div`
    width: 100%;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
`

const App__menuitem_head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const App__menuitem_sub = styled.div`
    width: 100%;
    margin-top: 0.2rem;
`


export { App__menuitem, App__menuitem_head,App__menuitem_sub }