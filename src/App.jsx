import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-contain bg-no-repeat bg-center mt-24">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <footer className="w-full h-20 bg-primary flex justify-center items-center">
          <p className="text-white text-[14px]">
            © 2023 Ala Eddine Kezzouz. All rights reserved.
            <span
              style={{
                background:
                  "linear-gradient(to right, #007A4D, #CE1126, #FFFFFF)",
                padding: "0.5rem",
                marginLeft: "0.5rem",
                borderRadius: "0.25rem",
              }}
            >
            </span>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
