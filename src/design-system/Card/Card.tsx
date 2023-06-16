import styled, { css } from "styled-components";
export const Card = styled.div<{ $scaleAnimation?: boolean }>`
    padding: var(--spacing-4);
    background-color: var(--white);
    border-radius: 1.6rem;
    border: 1px solid var(--gray-200);
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08),
        0px 4px 6px -2px rgba(16, 24, 40, 0.03);

    ${(props) =>
        props.$scaleAnimation &&
        css`
            transition: all 1s;

            &:hover {
                transform: scale(1.05);
            }
        `}
`;
