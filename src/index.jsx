import React from "react";
import ReactDOMClient from "react-dom/client";
import { UserEditProfile } from "./screens/UserEditProfile";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<UserEditProfile />);
