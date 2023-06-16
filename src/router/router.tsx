import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate
} from "react-router-dom";

import App from "../pages/App";

import { UserContainer, ErrorPage } from "../pages";
import { ErrorBoundary } from "../components";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<Navigate to="users" />}
                errorElement={
                    <ErrorPage
                        heading="You have the wrong address"
                        detail="Sorry, the page you are looking for doesn't exists"
                        navigateTo="/users"
                    />
                }
            ></Route>
            <Route
                path="/users"
                element={
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                }
                errorElement={
                    <ErrorPage
                        heading="You have the wrong address"
                        detail="Sorry, the page you are looking for doesn't exists"
                        navigateTo="/users"
                    />
                }
            ></Route>
            <Route
                path="users/:username"
                element={
                    <ErrorBoundary key={"1"}>
                        <UserContainer />
                    </ErrorBoundary>
                }
            ></Route>
        </>
    )
);
