import styled from "styled-components";

export const WalletBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 272px;
  height: 332px;
  border-radius: 15px;
  background: linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
    
`

export const WalletCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 35px;
    width: 203px;
    height: 203px;
    border-radius: 100%;
    background: linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 85%);
    backdrop-filter: blur(10px);
    
`

export const ImageWallet = styled.img`
    width: 114px;
    height: 114px;
    border-radius: 100%;
    background: transparent;

`

export const WalletName = styled.p`
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    background: transparent;
`