import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserReposType } from "../../api/api";
import {
    Card,
    List,
    ListBody,
    ListHead,
    ListItem,
    Typography,
    Button,
    Badge,
    BadgeVariantProps
} from "../../design-system";

const ReposListCard = styled(Card)`
    height: 60rem;
`;

const RepoItem = styled(ListItem)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
    padding: var(--spacing-1);
`;

const RepoLanguages = styled.div`
    display: flex;
    gap: var(--spacing-1);
`;

const RepoChip = styled(Button)`
    height: 2.2rem;
`;

const idxToColor: { [key: string]: BadgeVariantProps } = {
    "0": "blue",
    "1": "green",
    "2": "yellow",
    "3": "red"
};

export const UserRepos: React.FC<{ data: UserReposType }> = ({ data }) => {
    return (
        <ReposListCard>
            <List>
                <ListHead>
                    <Typography variant="textL" align="left" weight="medium">
                        Repositories ({data.totalCount})
                    </Typography>
                </ListHead>
                <ListBody>
                    {data.nodes.map((node, idx) => {
                        return (
                            <Link to={node.url} target="blank" key={idx}>
                                <RepoItem>
                                    <div>
                                        <Typography
                                            variant="textL"
                                            align="left"
                                            weight="semibold"
                                        >
                                            {node.name}
                                        </Typography>
                                        <RepoLanguages>
                                            {node.languages?.nodes &&
                                                node.languages.nodes.map(
                                                    (language, idx) => {
                                                        return (
                                                            <Badge
                                                                variant={
                                                                    idxToColor[
                                                                        idx
                                                                    ]
                                                                }
                                                                key={idx}
                                                            >
                                                                {language.name}
                                                            </Badge>
                                                        );
                                                    }
                                                )}
                                        </RepoLanguages>
                                    </div>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                    >
                                        {node.stargazers.totalCount} &#9733;
                                    </Button>
                                </RepoItem>
                            </Link>
                        );
                    })}
                </ListBody>
            </List>
        </ReposListCard>
    );
};
