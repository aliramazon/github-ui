import styled, { css } from "styled-components";
import { Link, To } from "react-router-dom";

export type ButtonColors = "primary" | "secondary" | "error" | "primaryLight";
type ButtonVariant = "text" | "contained";

interface ButtonBaseProps {
    $color?: ButtonColors;
    $variant?: ButtonVariant;
    $fullWidth?: boolean;
    $size?: "small" | "medium" | "large";
}

interface ButtonProps extends ButtonBaseProps {
    color?: ButtonColors;
    variant?: ButtonVariant;
    disabled?: boolean;
    fullWidth?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
    renderAsLink?: boolean;
    navigateTo?: To;
    className?: string;
    tabIndex?: number;
}

const ButtonBase = styled.button<ButtonBaseProps>`
    /* By default Button is Primary and Text variant */

    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
    padding: 0 1.4rem;
    height: 3.6rem;
    border-radius: 0.8rem;
    width: ${(props) => (props.$fullWidth ? "100%" : "max-content")};
    user-select: none;

    color: var(--primary-700);
    font-size: var(--font-size-2);
    line-height: var(--line-height-2);
    font-weight: var(--font-weight-500);
    font-family: "Maven Pro", sans-serif;

    &.disabled {
        pointer-events: none;
    }

    ${(props) =>
        props.$variant !== "contained" &&
        css`
            &:hover,
            &:focus {
                color: var(--primary-800);
                background-color: var(--primary-50);
            }

            &:disabled,
            &.disabled {
                color: var(--gray-300);
            }
        `}

    /* Sizes */

    ${(props) =>
        props.$size === "medium" &&
        css`
            gap: var(--spacing-3);
            padding: 0 1.8rem;
            height: 4.4rem;
            font-size: var(--font-size-3);
            line-height: var(--line-height-3);
        `}

    ${(props) =>
        props.$size === "large" &&
        css`
            padding: 0 2.8rem;
            height: 6rem;
            font-size: var(--font-size-4);
            line-height: var(--line-height-4);
        `}

    /* Secondary and Text variant */

    ${(props) =>
        props.$color === "secondary" &&
        props.$variant !== "contained" &&
        css`
            color: var(--gray-600);

            &:hover,
            &:focus {
                background-color: var(--gray-50);
                color: var(--gray-700);
            }

            &:disabled,
            &.disabled {
                color: var(--gray-300);
            }
        `}

     
    /* Error and Text variant */

    ${(props) =>
        props.$color === "error" &&
        props.$variant !== "contained" &&
        css`
            color: var(--red-700);

            &:hover,
            &:focus {
                background-color: var(--red-50);
                color: var(--red-800);
            }

            &:disabled,
            &.disabled {
                color: var(--red-300);
            }
        `}

    /* Primary and Contained variant */

    ${(props) =>
        props.$variant === "contained" &&
        css`
            background-color: var(--primary-600);
            color: var(--white);

            &:hover:not(:focus) {
                background-color: var(--primary-700);
            }

            &:focus {
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
                    0px 0px 0px 4px #f4ebff;
            }
            &:disabled,
            &.disabled {
                background-color: var(--primary-200);
            }
        `}

    /* Secondary and Contained variant */

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "secondary" &&
        css`
            background-color: var(--white);
            color: var(--gray-700);
            border: 1px solid var(--gray-300);

            &:hover:not(:focus) {
                background-color: var(--gray-50);
            }

            &:focus {
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
                    0px 0px 0px 4px #f2f4f7;
            }
            &:disabled,
            &.disabled {
                color: var(--gray-200);
                border: 1px solid var(--gray-200);
                background-color: var(--white);
            }
        `}

    /* Error and Contained variant */

    ${(props) =>
        props.$variant === "contained" &&
        props.$color === "error" &&
        css`
            background-color: var(--red-600);
            color: var(--white);

            &:hover:not(:focus) {
                background-color: var(--red-700);
            }

            &:focus {
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
                    0px 0px 0px 4px #fee4e2;
            }
            &:disabled,
            &.disabled {
                background-color: var(--red-200);
            }
        `}

        /* PrimaryLight and Contained Variant */

        ${(props) =>
        props.$variant === "contained" &&
        props.$color === "primaryLight" &&
        css`
            background-color: var(--primary-50);
            color: var(--primary-700);

            &:hover:not(:focus) {
                background-color: var(--primary-100);
                color: var(--primary-800);
            }

            &:focus {
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
                    0px 0px 0px 4px #f4ebff;
            }
            &:disabled,
            &.disabled {
                background-color: var(--primary-25);
                color: var(--primary-300);
            }
        `}
`;

const Button: React.FC<ButtonProps> = (props) => {
    const {
        color,
        variant,
        disabled,
        fullWidth,
        size,
        onClick,
        renderAsLink,
        navigateTo,
        className,
        tabIndex
    } = props;
    return (
        <ButtonBase
            onClick={onClick}
            disabled={disabled}
            as={renderAsLink ? Link : "button"}
            to={navigateTo as To}
            className={`${className} ${disabled ? "disabled" : ""}`}
            tabIndex={tabIndex}
            $color={color}
            $variant={variant}
            $fullWidth={fullWidth}
            $size={size}
        >
            {props.children}
        </ButtonBase>
    );
};

export { Button };
