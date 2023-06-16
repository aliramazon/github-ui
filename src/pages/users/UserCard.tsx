import styled from "styled-components";
import { Button, Card } from "../../design-system";

const UserCardBase = styled(Card)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserAvatar = styled.img`
    height: 5rem;
    width: 5rem;
    object-fit: cover;
    border-radius: var(--border-radius-10);
    box-shadow: 0px 0px 0px 2px var(--primary-100);
`;

interface UserCardProps {
    avatarUrl: string;
    username: string;
}
export const UserCard: React.FC<UserCardProps> = ({ avatarUrl, username }) => {
    return (
        <UserCardBase $scaleAnimation>
            <UserAvatar src={avatarUrl} />
            <Button color="primaryLight" variant="contained">
                {username}
            </Button>
        </UserCardBase>
    );
};
