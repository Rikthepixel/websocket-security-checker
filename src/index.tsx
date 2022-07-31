import React from 'react';
import { createRoot, hydrateRoot } from "react-dom/client";
import App from './App';
import "./index.scss";

const rootElement = document.getElementById("root")!;
const children = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
const root = rootElement.hasChildNodes() ?
    hydrateRoot(rootElement, children) :
    createRoot(rootElement);

root.render(children);