import React, { ErrorInfo } from "react";
import { ErrorPage } from "../pages";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Error caught by error boundary:", error, errorInfo);
    }
    resetError = () => this.setState({ hasError: false });

    render() {
        if (this.state.hasError) {
            return (
                <ErrorPage
                    heading="Something went wrong"
                    detail="Probably, it is not your fault. Please come back later!"
                    navigateTo="/users"
                    resetError={this.resetError}
                />
            );
        }

        return this.props.children;
    }
}
