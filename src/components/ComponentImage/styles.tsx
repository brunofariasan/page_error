import styled from "styled-components"

export const SecImageError = styled.div `
    display: flex;
    justify-content: center;

    img {
        max-width: 74%;

        @media (max-width: 768px) {
        max-width: 100%;
        }
    }
`;

export const SecInitial = styled.div `
    width: 60%;
`;

export const DivFlex = styled.div `
    width: 50vw;
    display: flex;
    justify-content: space-around;
`;
