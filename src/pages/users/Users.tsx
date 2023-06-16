import styled from "styled-components";
import { Link } from "react-router-dom";
import { UsersDataType } from "../../api/api";
import {
    Container,
    SectionBase,
    SectionHeading,
    SectionSubHeading,
    UserCard
} from "../../components";

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: var(--spacing-8);
`;

interface UsersProps {
    data: UsersDataType;
}
export const Users: React.FC<UsersProps> = ({ data }) => {
    return (
        <SectionBase>
            <Container>
                <SectionHeading align="left">GitHub Users</SectionHeading>
                <SectionSubHeading align="left">
                    Use below pagination buttons to view more users
                </SectionSubHeading>
                <Cards>
                    {data?.map((user) => {
                        return (
                            <Link to={user.login} key={user.login}>
                                <UserCard
                                    avatarUrl={user.avatar_url}
                                    username={user.login}
                                />
                            </Link>
                        );
                    })}
                </Cards>
            </Container>
        </SectionBase>
    );
};
