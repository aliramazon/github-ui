import { Users } from "./Users";
import { useUsers } from "../../hooks";
import { Spinner } from "../../components";

export const UsersContainer = () => {
    const { isLoading, isError, data, error } = useUsers();
    if (isLoading) return <Spinner />;
    if (isError) throw error;

    if (!data) return null;
    return <Users data={data} />;
};
