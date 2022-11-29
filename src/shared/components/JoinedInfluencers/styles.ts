import styled from "styled-components";

export const Container = styled.div`
    margin: 10px;
    padding: 32px 25px;
    gap: 32px;

    display:flex;
    flex-direction:column;

    width: 387px;
    height: 392px;

    background: linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    backdrop-filter: blur(10px);
    border-radius: 15px;
`

export const ContainerImg = styled.div`
    display: flex;
    gap: 16px;

    background: transparent; 
`

export const ContainerPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent; 
`

export const ContainerTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: transparent; 
`

export const ContainerChecked = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    background: transparent;
`

export const ContainerUnderside = styled.div`
    display: flex;
    justify-content: space-between;    
    align-items: self-end;

    background: transparent;

`

//Images

export const LargerImg = styled.img`
    width: 184px;
    height: 190px;
    border-radius: 15px;
    background: transparent;
`

export const SmallerImg = styled.img`
    width: 137px;
    height: 190px;
    background: transparent;

`

export const PerfilImg = styled.img`
    width: 105px;
    height: 105px;
    border-radius: 100%;
    border: 4px solid #000000;
    background: transparent;

    margin-top: -55px;
    margin-left: -30px;
`

export const PerfilChecked = styled.img`
    width: 18.5px;
    height: 18.5px;
    background: transparent;
`
//Texts

export const PerfilText = styled.p`
    font-family: 'Lato';
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;

    background: transparent;
`

export const PerfilAccount = styled.p`
    font-family: 'Heebo';
    font-weight: 400;
    font-size: 16px;
    color: #CBCBCB;
;

    background: transparent;
`

export const PerfilButton = styled.button`
    width: 125px;
    height: 47px;
    background: rgba(248, 29, 251, 0.05);
    color: #FFFFFF;

    padding: 15px 42px;
    border: 1px solid #F81DFB;
    border-radius: 42px;
`