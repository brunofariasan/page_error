import styled from "styled-components"

export const SecTitle = styled.div `
    width: 73%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Title = styled.h1 `
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    letter-spacing: -0.035em;
    color: #333333;
    font-size: clamp(3.1em,0.2em + 3.24vw,35.5em);
`;