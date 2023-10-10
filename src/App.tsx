import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Layout from "./modules/Layout";
import { StoreManagementRoutes } from "./modules/StoreManagement/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {StoreManagementRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
