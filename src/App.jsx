import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, AboutMe, Projects, ContactMe } from "./components";
import { StarsCanvas } from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <AboutMe/>
        <Projects/>
        <div className="relative z-0">
          <ContactMe/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App