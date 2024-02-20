import styled from 'styled-components';

export const handleRandomLightColor = () => {
  let r = 150 + Math.round(100 * Math.random());
  let g = 150 + Math.round(100 * Math.random());
  let b = 150 + Math.round(100 * Math.random());
  return `rgb(${r}, ${g}, ${b})`;
}

export const Heading = styled.h2`
    margin: 10px 0 0;
`

export const Paragraph = styled.p`
    margin: 0;
`

export const Btn = styled.button.attrs(props => ({
  style: {
    backgroundColor: props.color || 'papayawhip'
  }
}))`
    margin-top: auto;
    padding: 10px 20px;
    border: 0;
    cursor: pointer;
    
    &:hover {
        filter: brightness(.95);
    }
`

export const Box = styled.div<{ width, borderBottom, padding, margin }>`
    width: ${props => props.width || 'auto'};
    border-bottom: ${props => props.borderBottom || 'none'};
    padding: ${props => props.padding || '0 0 10px'};
    margin: ${props => props.margin || '0 0 10px'};
`

export const Img = styled.img`
    max-width: 150px;
    height: 150px;
    object-fit: cover;
    margin: auto;
    cursor: pointer;
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    border: 1px dotted black;
    padding: 10px;
`

export const Code = styled.code<{ color }>`
    background-color: ${props => props.color || 'papayawhip'};
    position: absolute;
    padding: 10px;
`