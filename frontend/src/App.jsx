import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "../src/pages/Home";
import Results from "../src/pages/Results";
import DataVisual from '../src/pages/DataVisual';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
        <Route element={<RootLayout/>}> 
          <Route element={<Home/>} path="/"></Route>
          <Route element={<Results/>} path="/route"></Route>
          <Route element={<DataVisual/>} path="/"></Route>
        </Route>
      
      </>

    )
  )


  return <>
  
        <RouterProvider router = {router}></RouterProvider>
  </>;
}

export default App;
