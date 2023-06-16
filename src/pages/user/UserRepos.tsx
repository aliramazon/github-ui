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
    gap: var(--spacing-2);

    @media screen and (max-width: 30em) {
        height: 8rem;
    }
`;

const RepoLanguages = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-1);
`;

const idxToColor: { [key: string]: BadgeVariantProps } = {
    "0": "blue",
    "1": "green",
    "2": "yellow",
    "3": "red"
};

const RepoName = styled(Typography)`
    @media screen and (max-width: 30em) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 20rem;
    }
    @media screen and (max-width: 25em) {
        max-width: 15rem;
    }
`;

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
                                        <RepoName
                                            variant="textL"
                                            align="left"
                                            weight="semibold"
                                        >
                                            {node.name}
                                        </RepoName>
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
