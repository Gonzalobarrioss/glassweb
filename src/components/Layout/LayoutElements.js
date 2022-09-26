import styled from "styled-components"

export const LayoutContainer = styled.div`
    
    height: 100vh;
    background: linear-gradient(to right top,#65dfc9, #6cdbeb);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    
`

export const Circle = styled.div`
    background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
    
    width: 15rem;
    height: 15rem;
    position: absolute;
    border-radius: 50%;
    top: ${({id}) => (id ? '5%' : '70%')};
    right: ${({id}) => (id ? '15%' : '75%')};
    z-index: 2;

    @media screen and (max-width: 768px) {
        width: 10rem;
        height: 10rem;;
    }
`