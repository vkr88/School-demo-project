import Routers from "./components/routes/Routers";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routers/>
          <Footer></Footer>
    </>
  )
}

export default App
