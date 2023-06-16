import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../api/api";

export const useUsers = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["users"],
        queryFn: gitHubApi.fetchUsers,
        refetchOnWindowFocus: false,
        staleTime: 1000000
    });

    return { isLoading, isError, data, error };
};
