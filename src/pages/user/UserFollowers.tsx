import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserFollowersType } from "../../api/api";
import {
    List,
    ListHead,
    Card,
    ListBody,
    Typography,
} from "../../design-system";
import { AvatarAndListItem } from "../../components/";

const UserFollowersCard = styled(Card)`
    height: 60rem;
`;

export const UserFollowers: React.FC<{ data: UserFollowersType }> = ({
    data,
}) => {
    return (
        <UserFollowersCard>
            <List>
                <ListHead>
                    <Typography variant="textL" align="left" weight="medium">
                        Followers ({data.totalCount})
                    </Typography>
                </ListHead>
                <ListBody>
                    {data.nodes.map((node, idx) => {
                        return (
                            <Link
                                to={`../${node.login}`}
                                target="blank"
                                key={idx}
                                relative="path"
                            >
                                <AvatarAndListItem
                                    imgUrl={node.avatarUrl}
                                    text={node.login}
                                />
                            </Link>
                        );
                    })}
                </ListBody>
            </List>
        </UserFollowersCard>
    );
};
