import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneFrame from "../components/PhoneFrame";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import AccountSettings from "../pages/AccountSettings";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <PhoneFrame>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/settings" element={<AccountSettings />} />
        </Routes>
      </PhoneFrame>
    </BrowserRouter>
  );
}
