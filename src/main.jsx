import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FormDataProvider } from "../utils/FormDataContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormDataProvider>
      <App />
    </FormDataProvider>
  </StrictMode>
);
