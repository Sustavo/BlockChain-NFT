import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #292929;
    border-top: 4px solid rgba(255, 255, 255, 0.4);
    border-bottom: 4px solid rgba(255, 255, 255, 0.4);
    border-radius: 41px;
    gap: 25px;
    width: 357px;
    height: 446px;

`

export const ConnectWalletTitle = styled.p`
    font-size: 25px;
    font-weight: 500;
    font-family: 'Lato';
    margin-top: 30px;
    padding: 0 48px;
    color: #FFFFFF;
    background: transparent;
`

export const ConnectWalletList = styled.ul`
    display: flex;
    flex-direction: column;
    background: transparent;
    gap:30px;
    padding: 0 48px;
`

export const ConnectWalletOrganize = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
    background: transparent;
`

export const ConnectWalletListTitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    font-family: 'Lato';
    color: #FFFFFF;
    background: transparent;
`

export const ConnectWalletListImg = styled.img`
    width: 37px;
    height: 37px;
    border-radius: 100%;
    background: transparent;
`

export const ConnectWalletLine = styled.div`
    width: 297px;
    border: 1px solid #A7A7A7;
    opacity: 0.4;
    margin: 0 30px;
`