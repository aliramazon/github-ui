import styled from "styled-components";
import { UserOrgsType } from "../../api/api";
import {
    List,
    ListHead,
    Card,
    ListBody,
    Typography
} from "../../design-system";
import { AvatarAndListItem } from "../../components";
import { Link } from "react-router-dom";

const UserOrgsCard = styled(Card)`
    height: 60rem;
`;

export const UserOrgs: React.FC<{ data: UserOrgsType }> = ({ data }) => {
    return (
        <UserOrgsCard>
            <List>
                <ListHead>
                    <Typography variant="textL" align="left" weight="medium">
                        Organizations ({data.totalCount})
                    </Typography>
                </ListHead>
                <ListBody>
                    {data.nodes.map((node, idx) => {
                        return (
                            <Link to={node.url} key={idx} target="blank">
                                <AvatarAndListItem
                                    imgUrl={node.avatarUrl}
                                    text={node.name}
                                />
                            </Link>
                        );
                    })}
                </ListBody>
            </List>
        </UserOrgsCard>
    );
};
