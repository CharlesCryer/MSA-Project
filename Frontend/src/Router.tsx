import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./components/Main/Settings/Settings";
import Subjects from "./components/Main/Subjects/Subjects";
import Summary from "./components/Main/Summary/Summary";
import Layout from "./Layouts/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/summary" element={<Summary />} />
          <Route path="/subject" element={<Subjects />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
