import { setupServer } from "msw/node";
import { rest, graphql as mswGraphql } from "msw";
import { gitHubApi } from "./api";

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetchUsers returns correct data", async () => {
    const mockUsers = [
        {
            login: "testuser1",
            id: 1,
            avatar_url: "https://avatar.url",
            url: "https://github.com/testuser1"
        },
        {
            login: "testuser2",
            id: 2,
            avatar_url: "https://avatar.url",
            url: "https://github.com/testuser2"
        }
    ];

    server.use(
        rest.get("https://api.github.com/users", (req, res, ctx) => {
            return res(ctx.json(mockUsers));
        })
    );

    const result = await gitHubApi.fetchUsers();

    expect(result).toEqual(mockUsers);
});

test("fetchUser returns correct data", async () => {
    const username = "testuser";
    const mockUser = {
        user: {
            repositories: {
                totalCount: 10,
                nodes: [
                    {
                        name: "Repo1",
                        url: "https://github.com/testuser/repo1",
                        stargazers: { totalCount: 100 },
                        languages: {
                            nodes: [
                                { name: "JavaScript" },
                                { name: "TypeScript" }
                            ]
                        }
                    }
                ]
            },
            organizations: {
                totalCount: 2,
                nodes: [
                    {
                        name: "Org1",
                        avatarUrl: "https://org.avatar.url",
                        url: "https://github.com/org1"
                    }
                ]
            },
            followers: {
                totalCount: 5,
                nodes: [
                    {
                        login: "follower1",
                        avatarUrl: "https://follower.avatar.url",
                        url: "https://github.com/follower1"
                    }
                ]
            }
        }
    };

    server.use(
        mswGraphql.query("userData", (req, res, ctx) => {
            if (req.variables.username === username) {
                return res(ctx.data(mockUser));
            }
        })
    );

    const result = await gitHubApi.fetchUser({ username });

    expect(result).toEqual(mockUser);
});
