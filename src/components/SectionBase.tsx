import styled, { css } from "styled-components";

export const SectionRightAndLeftPadding = css`
    @media screen and (max-width: 70em) {
        padding-right: var(--spacing-20);
        padding-left: var(--spacing-20);
    }

    @media screen and (max-width: 60em) {
        padding-right: var(--spacing-16);
        padding-left: var(--spacing-16);
    }

    @media screen and (max-width: 50em) {
        padding-right: var(--spacing-12);
        padding-left: var(--spacing-12);
    }

    @media screen and (max-width: 30em) {
        padding-right: var(--spacing-2);
        padding-left: var(--spacing-2);
    }
`;

export const SectionBase = styled.section`
    padding-right: var(--spacing-24);
    padding-left: var(--spacing-24);
    padding-top: var(--spacing-4);
    padding-bottom: var(--spacing-4);

    ${SectionRightAndLeftPadding}
`;
