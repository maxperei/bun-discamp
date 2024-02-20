import styled from 'styled-components';

export const Main = styled.main`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-family: system-ui;
`
export const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
    @media (max-width: 991px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`
export const Menu = styled.ul`
    display: none;
    z-index: 1;
    margin: 0;
    padding: 0;
`
export const Select = styled.div`
    margin: 10px 0 10px auto;
    padding: 10px;
    > em {
        font-style: normal;
        transform: scale(2);
        display: inline-block;
    }
    &:hover {
        span, em {
            display: none;
        }
        ${Menu} {
            display: inline-flex;
            gap: 10px;
        }
    }
`
export const Li = styled.li`
    height: 100%;
    display: inline-block;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`