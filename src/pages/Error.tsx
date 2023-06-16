import styled from "styled-components";
import {
    SectionName,
    SectionHeading,
    SectionSubHeading,
    SectionBase,
    Container,
} from "../components";

import { Button } from "../design-system";

const CTAButton = styled(Button)`
    margin: 0 auto;
`;

interface ErrorPageProps {
    heading: string;
    detail: string;
    navigateTo?: string;
}
export const Error: React.FC<ErrorPageProps> = ({
    heading,
    detail,
    navigateTo = "",
}) => {
    return (
        <>
            <SectionBase>
                <Container>
                    <SectionName align="center">Oops... </SectionName>
                    <SectionHeading align="center">{heading}</SectionHeading>
                    <SectionSubHeading align="center">
                        {detail}
                    </SectionSubHeading>
                    <CTAButton
                        variant="contained"
                        size="large"
                        renderAsLink
                        navigateTo={navigateTo}
                    >
                        Take me home
                    </CTAButton>
                </Container>
            </SectionBase>
        </>
    );
};
