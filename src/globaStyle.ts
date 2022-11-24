import styled, { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-family: 'Oxanium', cursive;
        background: #140C1F;
        /* background: green */
  }
`

export const Flex = styled('div')<{alignItems?: string, flexDirection?: string, justifyContent?: string}>`
  display: flex;
  background: transparent;
  flex-direction: ${props => props.flexDirection ? 'row' : 'row' ? 'row-reverse' : 'row-reverse' ? 'column' : 'column' ? 'column-reverse' : 'column-reverse' ? undefined : 'normal'};
  align-items: ${props => props.alignItems ? 'center' : 'center' ? 'flex-start' : 'flex-start' ? 'flex-end' : 'flex-end' ? 'stretch' : 'stretch' ? 'start' : 'start' ? 'end' : 'end' ? 'baseline' : 'baseline' ? undefined : 'normal'};
  justify-content: ${props => props.justifyContent ? 'center' : 'center' ? 'start' : 'start' ? 'end' : 'end' ? 'flex-start' : 'flex-start' ? 'flex-end' : 'flex-end' ? 'left' : 'left' ? 'right' : 'right' ? 'space-between' : 'space-between' ? 'space-around' : 'space-around' ? 'space-evenly' : 'space-evenly' ? 'stretch' : 'stretch'};
`

export default globalStyle;