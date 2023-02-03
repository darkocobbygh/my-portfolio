import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";


function App() {
  const [dark,setDark]=useState(false);


  return (
    <div className="App">
      <Toggle/>
     <Intro/>
     <About/>
     <Contact/>
     
    </div>
  );
}

export default App;
