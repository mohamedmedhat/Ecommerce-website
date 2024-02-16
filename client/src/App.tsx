import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {  RouterProvider} from "react-router-dom";
import { router } from "./routes/Routes";


function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router}/>
      <Footer />
    </>
  );
}

export default App;
