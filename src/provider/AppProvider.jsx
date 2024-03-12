/* eslint-disable react/prop-types */
import { Button, App as AntdApp, ConfigProvider } from "antd";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { antdThemeConfig } from "../config/antd";
import { Spinner } from "../components/spinner";

const ErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong</h2>
      <Button type="primary" href={window.location.origin}>
        Refresh
      </Button>
    </div>
  );
};

const InProgressComponent = () => {
  return (
    <div className="flex h-full items-center justify-center gap-x-1.5 p-[100px]">
      <Spinner />
      <span>Loading...</span>
    </div>
  );
};

export const AppProvider = ({ children }) => {
  return (
    <React.Suspense fallback={<InProgressComponent />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ConfigProvider theme={antdThemeConfig}>
          <AntdApp>{children}</AntdApp>
        </ConfigProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
