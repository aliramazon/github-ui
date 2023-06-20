# GitHub Interface

## The Project

We're going to create an application that uses the public Github API to render Github users and display information
about their account.

The application will consist of two pages:

1. A Home Page, where I can see a list of users.
2. A User detail page, where I can view specific information for a user.

The home page will query the [users](https://api.github.com/users) endpoint and render each user. We should:

- show their avatar
- show their username

When I click on a user, I will be taken to a dedicated user detail page. On that page, I should see:

- their repos, which is the main content of the page.
- their organizations
- their first 5 followers, and include a count of total followers.

Github provides a rate limit for API users without authentication to a max of 60 requests per hour. You may want to mock
the response or use a personal access token to fetch the API.

Some questions to think about:

- How can you make your code reusable?
- How can we adhere to proper separation of concerns?
- Are we using modern development practices?
- Is my page mobile responsive?

We would also like to consider the following:

- How can I make it easy for any engineer to create a detail page?
- How can I handle error cases, like 404s, automatically?
- All in all: **how can I construct the beginnings of a _system_ that will make other engineers' lives easier?**
