import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import React from "react";
import store from "@/store";

// TODO React 18写法（react17 之前的写法会有error）
const container = document.getElementById('root')!;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
