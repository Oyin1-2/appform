import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import LayOut from "./pages/LayOut";
import Info from "./pages/Info";
//import Plan from "./pages/Plan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import PageNotFound from "./pages/PageNotFound";
import Plan from "./pages/plan";
import NextPage from "./pages/NextPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Navigate to="info" replace />} />
          <Route path="info" element={<Info />} />
          <Route path="plan" element={<Plan />} />
          <Route path="add-on" element={<AddOns />} />
          <Route path="summary" element={<Summary />} />
          <Route path="next-page" element={<NextPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
