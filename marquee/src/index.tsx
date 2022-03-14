import "./index.css";
import App from "./pages/App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    import.meta.env.VITE_APP_ENV === `prod` ? 
        document.getElementById(`marquee-container`) :
        document.getElementById(`root`) 
);
