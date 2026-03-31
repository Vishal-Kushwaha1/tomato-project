import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./context/AppContext.tsx";
import { SocketProvider } from "./context/SocketContext.tsx";

export const authService = "https://tomato-auth-lr6m.onrender.com";
export const restaurantService = "https://restaurant-service-75g2.onrender.com";
export const utilsService = "https://utils-service-e26h.onrender.com";
export const realtimeService = "https://realtime-service-04ou.onrender.com";
export const riderService = "https://rider-service-58su.onrender.com";
export const adminService = "https://admin-service-cbv1.onrender.com";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="721102151272-2237tj1trqgjcpm7u0ck6hh3p6335d6j.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
    ;
  </StrictMode>,
);
