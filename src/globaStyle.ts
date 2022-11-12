import styled, { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-family: 'Oxanium', cursive;
  }
`

export const Flex = styled('div')<{itemAlign: string, direction: string}>`
  display: flex;
  flex-direction: ${props => props.direction ? 'row' : 'row' ? 'row-reverse' : 'row-reverse' ? 'column' : 'column' ? 'column-reverse' : 'column-reverse' ? undefined : 'normal'};
  align-items: ${props => props.itemAlign ? 'center' : 'center' ? 'flex-start' : 'flex-start' ? 'flex-end' : 'flex-end' ? 'stretch' : 'stretch' ? 'start' : 'start' ? 'end' : 'end' ? 'baseline' : 'baseline' ? undefined : 'normal'};
`

export default globalStyle;