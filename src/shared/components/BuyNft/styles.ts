import styled from "styled-components";

//CONTAINERS

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
    align-items: center;
    background: transparent;
    padding: 30px 34px;
    gap: 14px;
    
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

export const ContainerOnsale = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background: transparent;
    margin-top: 4px;
`

export const ContainermakeEth = styled.div`
    display:flex;
    flex-direction: column;
    background: transparent;
`

export const ContainerEth = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    background: transparent;
`

export const ContainerPrice = styled.div`
    display: flex;
    flex-direction: column;
    background: transparent;
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

export const ContainerSeparete = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    background: transparent;
    padding: 20px 34px;
    
`

//Escrita

export const BuyNftFavoriteText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #FFFFFF;
    background  : transparent;
    text-align: right;
    
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
    font-family: 'Lato';
    font-weight: 400;
`

export const BuyNftOnsale = styled.p`
    font-size: 16px;
    color: #FFFFFF;
    background: transparent;
`

export const BuyNftOnsalePriceEth = styled.p`
    font-size: 20px;
    color: #FFFFFF;
    background: transparent;
`

export const BuyNftOnsalePriceDolar = styled.p`
    font-size: 14px;
    color: #FFFFFF;
    background: transparent;
    margin-left: 25px;
`

//Imagens


export const BuyNftImage = styled.img`
    width: 370px;
    height: 261px;
    border-radius: 15px;
`

export const BuyNftFavoriteImage = styled.img`
    width: 17px;
    height: 15px;
    background: transparent;

`


export const BuyNftPerfilImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    `

export const BuyNftEthereumImage = styled.img`
    width: 20px;
    height: 20px;
    background: transparent;
`


//Button

export const BuyNftButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    cursor: pointer;
`

export const BuyNftButton = styled.button`
    width: 322px;
    height: 60px;
    background: rgba(248, 29, 251, 0.05);
    border: 1px solid #F81DFB;

    color: #FFFFFF;
    font-weight: 500;
    font-size: 18px;
    text-align: center; 
    cursor: pointer;

`

export const BuyNftButtonBorder = styled.div`
    width: 7.8px;
    height: 40px;
    background: #F81DFB;
`


