import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100vh;
`

export const Heading = styled.h2`
    margin: 0 auto;
`

export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Spinner = styled.span`
    font-size: 4em;
    display: inline-block;
    animation: ${rotate} .5s linear infinite;
`