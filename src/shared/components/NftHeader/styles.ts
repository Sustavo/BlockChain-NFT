import styled from "styled-components";

export const OrganizePost = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 321px;
    height: 397px;
    background: rgb(255,255,255);
    background: linear-gradient(209deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.3) 100%);
    border-top: 3px solid rgba(255, 255, 255, 0.4);
    border-bottom: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(9px);
    border-radius: 41.6667px;

`

export const ImageSell = styled.img`  
    width: 287.5px;
    height: 280px;
    left: 16.67px;
    top: 20.83px;
    border-radius: 41.6667px;
    z-index: 9999;

`

export const PriceTitle = styled.p`
    font-size: 25px;
    color: #FFFFFF;
    opacity: 1;
    font-weight: 500;
    text-transform: capitalize;
    background: transparent;
`

export const Price = styled.p`
    font-size: 17px;
    font-weight: 500;
    color: #FFFFFF;
    text-transform: capitalize;
    background: transparent;
`