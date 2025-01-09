import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StatsContextProvider } from "./Context/StatsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StatsContextProvider>
    <App />
  </StatsContextProvider>
);
