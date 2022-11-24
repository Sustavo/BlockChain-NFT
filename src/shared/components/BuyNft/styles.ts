import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 394px;
    height: 543px;
    background: linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    backdrop-filter: blur(10px);
    border-radius: 15px;

    margin: 10px;
    padding: 10px 12px;
`

export const ContainerPerfil = styled.div`
    display: flex;
    flex-direction: row;
    background: transparent;
`
export const ContainerPerfilText = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
`

export const ContainerImg = styled.div`
    display: flex;
    background: transparent;    
`

export const BuyNftImage = styled.img`
    width: 370px;
    height: 261px;
    border-radius: 15px;
`

export const BuyNftFavorite = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 15px 20px 15px 20px;
    gap: 10px;
    margin-left: -95px;

    background: linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    backdrop-filter: blur(10px);
    border-radius: 0px 15px;
    z-index: 1;
`

export const BuyNftFavoriteImage = styled.img`
    width: 17px;
    height: 15px;
    background: transparent;

`

export const BuyNftFavoriteText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
    background  : transparent;
    text-align: right;
    
`

export const BuyNftPerfilImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`

export const BuyNftPerfilTitle = styled.p`
    font-size: 25px;
    font-weight: 400;
    color: #FFFFFF;
    background: transparent;
`

export const BuyNftPerfilText = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    background: transparent;

`
