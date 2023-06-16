# OVERVIEW.md

## Implementation

In this project, I built an application that interfaces with the public Github API to render Github users and display detailed information about their accounts. The application consists of two primary pages:

-   Home Page: Displays a list of users with their avatars and usernames.
-   User Detail Page: Presents specific information for a user including their repositories, organizations, and the first 5 followers along with a count of total followers.

## Design and Styling

For UI/UX design, I leveraged the Untitled UI Design system as a guideline for color palettes, typography, and spacing. The major components such as Badge, Button, Card, HR, List, and Typography were constructed using Styled Components for better reusability and encapsulation. Global styles and variables were managed using a Global CSS file.

The application is designed to be mobile-friendly, and I achieved responsive layouts using CSS Grid. This ensures a smooth and consistent user experience across various device sizes.

## Data Management and API Interaction

For data fetching and server-side state management, I used React Query which provides an efficient, flexible, and robust solution. To interact with the Github GraphQL API and Rest API, I chose Github's in-house SDK, Octokit, which simplifies and standardizes API calls.

## Custom Hooks

I built two custom hooks `useUser` and `useUsers` that handle data fetching from the Github API. These hooks are designed to be reusable and can easily be extended for future features.

## Containerization and Error Handling

To achieve separation of concerns and better state management, I implemented container components for the Users and User pages. These containers are responsible for data fetching and they pass the data down to presentational components.

For error handling, I created a Global Error Boundary to catch and handle errors throughout the application. I also implemented a NotFound page for handling invalid routes.

## Routing

For routing, I used React Router v6 due to its flexibility, performance, and wide community support.

## Room for Improvement

Despite the accomplished tasks, there are a few enhancements that could be made with more time:

-   Implementing Pagination: To handle large amounts of data and improve the user experience.
-   Improving Error Handling: To provide more informative and user-friendly error messages.
-   Adding More Tests: To ensure the stability and reliability of the application.
-   Introducing Global State Management: Although it was not necessary for this application, for larger applications, a state management tool such as Context API, useReducer, or useState could be utilized to better handle application-wide state.
