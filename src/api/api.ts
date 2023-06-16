import { Octokit } from "octokit";
import { graphql } from "@octokit/graphql";

const octokitGQL = graphql.defaults({
    headers: {
        authorization: "Bearer " + process.env.REACT_APP_GITHUB_ACCESS_TOKEN
    }
});

const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN
});

export class GitHubAPI {
    async fetchUsers() {
        try {
            const response = await octokit.rest.users.list();
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async fetchUser({ username }: { username: string }) {
        try {
            const response = await octokitGQL(
                `query userData($username: String!){
                    user(login: $username) {
                        repositories(first: 100){
                            totalCount
                            nodes {
                                name
                                url
                                stargazers(first: 0){
                                    totalCount
                                }
                                languages(first: 4) {
                                    nodes {
                                        name
                                    }
                                }
                            }

                        }
                        organizations(first: 100) {
                            totalCount 
                            nodes {
                                name
                                avatarUrl
                                url
                            }
                        }
                        followers(first: 5){
                            totalCount
                            nodes {
                                login
                                avatarUrl
                                url
                            }
                        }
                    }
                }
                `,
                { username: username }
            );

            return response as FetchUserResponse;
        } catch (error) {
            throw error;
        }
    }
}

export const gitHubApi = new GitHubAPI();

export type UsersDataType = typeof gitHubApi.fetchUsers extends () => Promise<
    infer T
>
    ? T
    : never;

export interface UserFollowersType {
    totalCount: number;
    nodes: {
        login: string;
        avatarUrl: string;
        url: string;
    }[];
}

export interface UserReposType {
    totalCount: number;
    nodes: {
        name: string;
        url: string;
        stargazers: {
            totalCount: number;
        };
        languages: {
            nodes: {
                name: string;
            }[];
        };
    }[];
}

export interface UserOrgsType {
    totalCount: number;
    nodes: {
        name: string;
        avatarUrl: string;
        url: string;
    }[];
}

export interface UserDataType {
    followers: UserFollowersType;
    repositories: UserReposType;
    organizations: UserOrgsType;
}

export interface FetchUserResponse {
    user: UserDataType;
}
