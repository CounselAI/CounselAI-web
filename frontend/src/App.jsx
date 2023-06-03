import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//context
import { AuthProvider } from "./Context/AuthContext";

//layouts
import RootLayout from "./layouts/RootLayout";
import SearchLayout from "./layouts/SearchLayout";

//pages
import Home from "../src/pages/Home";
import Search from "./pages/Search";
import DataVisual from "../src/pages/DataVisual";
import Login from "./layouts/LoginLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route element={<Home />} path="/"></Route>
          <Route element={<DataVisual />} path="/"></Route>
        </Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<SearchLayout />}>
          <Route element={<Search />} path="/search"></Route>
        </Route>
      </>
    )
  );

  return (
    <>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
