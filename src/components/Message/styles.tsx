import styled from "styled-components"

export const SecMessage = styled.div `
    width: 49%;

    @media (max-width: 768px) {
        width: 85%;
    }
`;

export const MessageMain = styled.p `
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: -0.035em;
    color: #4F4F4F;
    font-size: clamp(1.1em,0.1em + 1.2vw,25.5em);
`;