import styled from "styled-components";

export const MainContainer = styled.div`
    background: white;
    height: 80vh;
    width: 60%;
    background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.4));
    border-radius: 2rem;
    z-index: 3;
    backdrop-filter: blur(100rem);
    display: flex;
    //margin: 90 90px;
    
`

export const Dashboard = styled.div`
    
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
    border-radius: 2rem;
    padding: 2rem 0rem;
`

export const User = styled.div`
    //display: flex;
`



export const ImageProfile = styled.div`
    display: inline-block;
    width: 80px;
    height:80px;
`
export const Name = styled.h3`
    margin: 0;
    color: #426696;
    font-weight: 600;
    opacity: 0.8; 
`

export const Description = styled.p`
    padding: 0;
    margin: 0;
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
    font-size: 1rem;
    //font-size: 1.5rem
`

export const Links = styled.ul`

    list-style: none;
    padding: 0;
    margin: 0;
`

export const Link = styled.li`
    
    display: flex;
    
    margin: 1rem 0rem;
    padding: 1rem 2rem;
    align-items: center;
    
`

export const SubTitle = styled.h2`
    margin: 0;
    padding: 0rem 2rem;
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
`

export const H1 = styled.h1`
    margin: 0;
    color: #426696;
    font-weight: 600;
    font-size: 3rem;
    opacity: 0.8; 
`

export const Pro = styled.div`
    display: flex;
    width: 80%;
    background: linear-gradient(to right top, #65dfc9, #65dfc9);
    border-radius: 2rem;
    color: white;
    padding: 1rem;
    position: relative;

    ${SubTitle}{ 
        color: white;
        font-size: 1.2em;
        font-weight: 600;
        padding: 0;
        width: 40%;
        text-align: start;
    }

    img{
        position: absolute;
        top: -10%;
        right: 10%;
    }
    
`

export const Games = styled.div`
    flex:2;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0rem 3rem ;
`

export const Status = styled.div`
    margin-bottom: 3rem;

    input{
        background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
        width: 50%;
        border: none;
        padding: 0.5rem;
        border-radius: 2rem;
    }
`

export const Cards = styled.div`
    
`

export const Card = styled.div`
    display:flex;
    background: linear-gradient(to left top, rgba(255,255,255,1), rgba(255,255,255,0.5));
    border-radius: 1rem;
    margin: 1rem 0rem; 
    padding: 1rem;
    box-shadow: 6px 6px 20px rgba(122,122,122,0.2);
    justify-content: space-between;
`

export const CardInfo = styled.h2`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    color: #658ec6;
    font-weight: 500;
    opacity: 0.8;
    margin: 0;

`

export const ProgressBar = styled.div`
    display: flex;
    position: relative;    
    background: linear-gradient(to right top, #65dfc9, #65dfc9);
    height: 30px;
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;

    &:after{
       content: '';
       width: 100%;
       height: 100%;
       background: rgb(236,236,236); 
       position: absolute;
       left: ${({percentage}) => (percentage ? percentage+"%" : '0')};
       
    }
`

export const Percentage = styled.p`
    margin: 0;
    color: #658ec6;
    font-weight: bold;
    background: linear-gradient(to right top, #65dfc9, #65dfc9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`