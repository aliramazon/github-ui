import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../api/api";

export const useUser = (username: string) => {
    const variables = { username };
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [username, variables],
        queryFn: () => gitHubApi.fetchUser(variables),
        refetchOnWindowFocus: false,
        staleTime: 1000000
    });

    return { data, isLoading, isError, error };
};
