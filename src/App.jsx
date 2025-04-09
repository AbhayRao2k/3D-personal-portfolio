import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works, Footer, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
