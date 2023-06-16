import { FC } from "react";
import styled, { css } from "styled-components";

export type BadgeVariantProps = "blue" | "green" | "yellow" | "red";
export interface BadgeProps {
    variant?: BadgeVariantProps;
    children: React.ReactNode;
}
export const BadgeBase = styled.div<BadgeProps>`
    height: 2rem;
    padding: 0 var(--spacing-2);
    width: 100%;
    display: flex;
    align-items: center;
    background-color: var(--gray-600);
    border-radius: var(--border-radius-4);
    width: max-content;
    color: var(--gray-100);
    font-size: var(--font-size-2);

    ${(props) =>
        props.variant === "blue" &&
        css`
            background-color: var(--primary-600);
            color: var(--primary-100);
        `}

    ${(props) =>
        props.variant === "green" &&
        css`
            background-color: var(--green-600);
            color: var(--green-100);
        `}

    ${(props) =>
        props.variant === "yellow" &&
        css`
            background-color: var(--yellow-600);
            color: var(--yellow-100);
        `}


    ${(props) =>
        props.variant === "red" &&
        css`
            background-color: var(--red-600);
            color: var(--red-100);
        `}
`;

export const Badge: FC<BadgeProps> = ({ variant, children }) => {
    return <BadgeBase variant={variant}>{children}</BadgeBase>;
};
