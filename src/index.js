import "./assets/boxicons-2.1.1/boxicons-2.1.1/css/boxicons.min.css";
import "swiper/css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import store from "./Store/store";
import Snackbar from "./components/Snackbar";
ReactDOM.render(
  <React.StrictMode>
        <Snackbar>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </Snackbar>
    </React.StrictMode>,
    document.getElementById("root")
);
