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

const App__menuitem_name = styled.div`
    flex: 1;
`

const App__menuitem_dash = styled.div`
    width: 90px;
    height: 1px;
    background: var(--color-golden);
    margin: 0 1rem;
`

const App__menuitem_price = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`


export { App__menuitem, App__menuitem_price, App__menuitem_dash, App__menuitem_head,App__menuitem_sub, App__menuitem_name }


//{4:42:11} 