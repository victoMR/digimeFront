import React, { Fragment } from "react";
import AppRoutes from "./routes/AppRoutes";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const App = () => {
  return (
    <Fragment>
      <ErrorBoundary>
        <div className="cursor-auto">
          <AppRoutes />
        </div>
      </ErrorBoundary>
    </Fragment>
  );
};

export default App;
