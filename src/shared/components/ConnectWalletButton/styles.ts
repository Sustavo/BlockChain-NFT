import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 727px;
    height: 80px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%);
    /* background: red; */
    backdrop-filter: blur(20px);

    margin: 10px;
`

export const HeaderBarText = styled.p`
    font-size: 18px;
    font-family: "Oxanium";
    font-weight: 400;
    text-transform: uppercase;
    
    background: transparent;
    color: #FFFFFF;

    cursor: pointer;
`