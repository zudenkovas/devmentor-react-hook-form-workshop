import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.Fragment>,
  document.getElementById("root")
);
