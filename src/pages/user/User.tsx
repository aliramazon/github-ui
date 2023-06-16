import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Hr } from "../../design-system";
import { UserFollowersType, UserOrgsType, UserReposType } from "../../api/api";
import {
    SectionBase,
    SectionHeading,
    SectionSubHeading,
    Container
} from "../../components";
import { UserRepos } from "./UserRepos";
import { UserOrgs } from "./UserOrgs";
import { UserFollowers } from "./UserFollowers";

interface UserProps {
    data: {
        username: string;
        githubUrl: string;
        followers: UserFollowersType;
        repos: UserReposType;
        orgs: UserOrgsType;
    };
}

const GoBackButton = styled(Button)`
    margin-bottom: var(--spacing-5);
`;

const Content = styled(Container)`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: var(--spacing-8);

    @media screen and (max-width: 75em) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 60em) {
        grid-template-columns: 2fr 1fr;
    }
    @media screen and (max-width: 50em) {
        grid-template-columns: 1fr;
    }
`;

export const User: React.FC<UserProps> = ({ data }) => {
    return (
        <>
            <SectionBase as={"header"}>
                <Container>
                    <GoBackButton
                        variant="contained"
                        color="primaryLight"
                        renderAsLink
                        navigateTo="/users"
                    >
                        Go Back
                    </GoBackButton>
                    <Link to={data.githubUrl}>
                        <SectionHeading align="left">
                            {data.username}
                        </SectionHeading>
                    </Link>

                    <SectionSubHeading align="left">
                        You can browse Repositories, Organizations and Followers
                    </SectionSubHeading>
                    <Hr />
                </Container>
            </SectionBase>

            <SectionBase as="main">
                <Content>
                    <UserRepos data={data.repos} />
                    <UserOrgs data={data.orgs} />
                    <UserFollowers data={data.followers} />
                </Content>
            </SectionBase>
        </>
    );
};
