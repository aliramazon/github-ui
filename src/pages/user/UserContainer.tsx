import { useParams } from "react-router-dom";
import { User } from "./User";
import { useUser } from "../../hooks";
import { Spinner } from "../../components";

export const UserContainer = () => {
    const params = useParams();
    const username = params?.username!;

    const { data, isLoading, isError, error } = useUser(username);

    if (isError) {
        throw error;
    }

    if (isLoading) {
        return <Spinner />;
    }

    if (data) {
        return (
            <User
                data={{
                    username,
                    githubUrl: "https://github.com/aliramazon",
                    followers: data.user.followers,
                    repos: data.user.repositories,
                    orgs: data.user.organizations
                }}
            />
        );
    }
    return null;
};
