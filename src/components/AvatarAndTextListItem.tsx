import { styled } from "styled-components";
import { ListItem, Button } from "../design-system";

const AvatarAndListItemBase = styled(ListItem)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--spacing-1);
`;

const Avatar = styled.img`
    height: 4rem;
    width: 4rem;
    object-fit: cover;
    border-radius: var(--border-radius-10);
    box-shadow: 0px 0px 0px 2px var(--primary-100);
`;

export const AvatarAndListItem: React.FC<{ imgUrl: string; text: string }> = ({
    imgUrl,
    text
}) => {
    return (
        <AvatarAndListItemBase>
            <Avatar src={imgUrl} alt="Org" />
            <Button variant="contained" color="primaryLight">
                {text}
            </Button>
        </AvatarAndListItemBase>
    );
};