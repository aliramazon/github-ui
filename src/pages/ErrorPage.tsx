import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
    SectionName,
    SectionHeading,
    SectionSubHeading,
    SectionBase,
    Container
} from "../components";

import { Button } from "../design-system";

const TakeHomeButton = styled(Button)`
    margin: 0 auto;
`;

interface ErrorPageProps {
    heading: string;
    detail: string;
    navigateTo: string;
    resetError?: () => void;
}
export const ErrorPage: React.FC<ErrorPageProps> = ({
    heading,
    detail,
    navigateTo,
    resetError
}) => {
    const navigate = useNavigate();

    const handleTakeHome = () => {
        resetError && resetError();
        navigate(navigateTo);
    };
    return (
        <>
            <SectionBase>
                <Container>
                    <SectionName align="center">Oops... </SectionName>
                    <SectionHeading align="center">{heading}</SectionHeading>
                    <SectionSubHeading align="center">
                        {detail}
                    </SectionSubHeading>

                    <TakeHomeButton
                        variant="contained"
                        size="large"
                        onClick={handleTakeHome}
                    >
                        Take me home
                    </TakeHomeButton>
                </Container>
            </SectionBase>
        </>
    );
};
