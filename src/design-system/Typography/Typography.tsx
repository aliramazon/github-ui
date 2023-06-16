import styled, { css } from "styled-components";

enum FontWeightMapper {
    normal = "var(--font-weight-400)",
    medium = "var(--font-weight-500)",
    semibold = "var(--font-weight-600)",
    bold = "var(--font-weight-700)"
}

export type TextAlign = "center" | "left" | "right" | "justify" | "inherit";
type FontWeight = "normal" | "medium" | "semibold" | "bold";
interface TypographyBaseProps {
    align: TextAlign;
    weight: FontWeight;
}

const font = css<{
    align: TextAlign;
    weight: FontWeight;
}>`
    text-align: ${({ align }) => align};
    font-weight: ${({ weight }) => FontWeightMapper[weight]};
`;
export const H1 = styled.h1<TypographyBaseProps>`
    color: var(--gray-900);
    font-size: var(--font-size-11);
    line-height: var(--line-height-11);
    ${font}
`;

export const H2 = styled.h2<TypographyBaseProps>`
    color: var(--gray-900);
    font-size: var(--font-size-10);
    line-height: var(--line-height-10);
    ${font}
`;

export const H3 = styled.h3<TypographyBaseProps>`
    color: var(--gray-900);
    font-size: var(--font-size-9);
    line-height: var(--line-height-9);
    ${font}
`;

export const H4 = styled.h4<TypographyBaseProps>`
    color: var(--gray-900);
    font-size: var(--font-size-8);
    line-height: var(--line-height-8);
    ${font}
`;

export const H5 = styled.h5<TypographyBaseProps>`
    color: var(--gray-900);
    font-size: var(--font-size-7);
    line-height: var(--line-height-7);
    ${font}
`;

export const H6 = styled.h6<TypographyBaseProps>`
    color: var(--gray-900);
    font-size: var(--font-size-6);
    line-height: var(--line-height-6);
    ${font}
`;

export const TextXL = styled.p<TypographyBaseProps>`
    color: var(--gray-900);
    font-size: var(--font-size-5);
    line-height: var(--line-height-5);
    ${font}
`;

export const TextL = styled.p<TypographyBaseProps>`
    color: var(--gray-600);
    font-size: var(--font-size-4);
    line-height: var(--line-height-4);
    ${font}
`;

export const TextM = styled.p<TypographyBaseProps>`
    color: var(--gray-600);
    font-size: var(--font-size-3);
    line-height: var(--line-height-3);
    ${font}
`;

export const TextS = styled.p<TypographyBaseProps>`
    color: var(--gray-600);
    font-size: var(--font-size-2);
    line-height: var(--line-height-2);
    ${font}
`;

export const TextXS = styled.p<TypographyBaseProps>`
    color: var(--gray-600);
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
    ${font}
`;

const FontVariants = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    textXL: TextXL,
    textL: TextL,
    textM: TextM,
    textS: TextS,
    textXS: TextXS
};

interface TypographyProps extends TypographyBaseProps {
    variant:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "textXL"
        | "textL"
        | "textM"
        | "textS"
        | "textXS";
    className?: string;
    children: string | React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
    variant,
    weight,
    align,
    className,
    children
}) => {
    const Variant = FontVariants[variant];

    return (
        <Variant weight={weight} align={align} className={className}>
            {children}
        </Variant>
    );
};

export { Typography };
