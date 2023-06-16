import styled from "styled-components";
import { Typography, TextAlign } from "../design-system";

interface Text {
    children: string;
    align: TextAlign;
}
const SectionNameBase = styled(Typography)`
    color: var(--primary-700);
    margin-bottom: var(--spacing-3);
`;

export const SectionName: React.FC<Text> = ({ children, align = "center" }) => {
    return (
        <SectionNameBase variant="textM" align={align} weight="semibold">
            {children}
        </SectionNameBase>
    );
};

const SectionHeadingBase = styled(Typography)`
    margin-bottom: var(--spacing-5);
`;

export const SectionHeading: React.FC<Text> = ({
    children,
    align = "center",
}) => {
    return (
        <SectionHeadingBase variant="h4" align={align} weight="medium">
            {children}
        </SectionHeadingBase>
    );
};

const SectionSubHeadingBase = styled(Typography)`
    margin-bottom: var(--spacing-16);
    color: var(--gray-600);
`;

export const SectionSubHeading: React.FC<Text> = ({
    children,
    align = "center",
}) => {
    return (
        <SectionSubHeadingBase variant="textXL" align={align} weight="normal">
            {children}
        </SectionSubHeadingBase>
    );
};
