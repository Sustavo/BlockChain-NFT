import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center ;
    justify-content: center;
    gap: 30px;
`

export const MainCointainer = styled.div`
    display: flex;
`

export const HowWorkCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 106px;
    height: 106px;
    border-radius: 100%;
    background: linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    backdrop-filter: 10px;
`

export const HowWorkCircleImg = styled.img`
    width: 40px;
    height: 40px;
    background: transparent;
`

export const HowWorkTitle = styled.p`
    font-size: 24px;
    font-weight: 400;
    color: #FFFFFF;


`

export const HowWorkTitleSans = styled.p`
    font-size: 24px;
    font-weight: 600;
    font-family: 'Work Sans';
    color: #FFFFFF;
`

export const HowWorkDashedBorderImg = styled.img`
    width: 166px;
    margin-top: -32px
`