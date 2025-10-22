import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/userContext.tsx";

import CaptainContext from './context/captainContext.tsx'


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CaptainContext>
      <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </UserContext>
    </CaptainContext>
  </StrictMode>
);
