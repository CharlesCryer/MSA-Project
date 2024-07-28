import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./components/Main/Settings/Settings";
import Subjects from "./components/Main/Subjects/Subjects";
import Summary from "./components/Main/Summary/Summary";
import Layout from "./Layouts/Layout";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/summary" element={<Summary />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
