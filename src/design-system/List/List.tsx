import styled from "styled-components";

export const List = styled.div`
    height: 100%;
    overflow-y: auto;
    overflow-x: auto;
`;

export const ListBody = styled.div``;

export const ListItem = styled.div`
    height: 5.2rem;
    border-bottom: 0.1rem solid var(--gray-200);
    width: 100%;

    &:hover {
        background-color: var(--gray-50);
    }
`;

export const ListHead = styled.div`
    border-bottom: 0.2rem solid var(--gray-200);
    width: 100%;
    height: 4.4rem;
    background-color: var(--white);
    z-index: 1;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`;
