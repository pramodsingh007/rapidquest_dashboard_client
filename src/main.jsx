import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import Background from './components/Background.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Background>
      <App />
      </Background>
    </ThemeProvider>
  </StrictMode>
);
