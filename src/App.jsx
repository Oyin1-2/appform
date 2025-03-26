import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./pages/Layout";
import Info from "./pages/info";
import Plan from "./pages/Plan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="info" replace />} />
          <Route path="info" element={<Info />} />
          <Route path="plan" element={<Plan />} />
          <Route path="add-on" element={<AddOns />} />
          <Route path="summary" element={<Summary />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;