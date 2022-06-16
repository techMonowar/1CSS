
import Landing from "./landing";
import Getstarted from "./Getstarted";
import Buttons from "./Buttons";
import Documentation from "./Documentation";
import Slider from "./Slider";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
 <Routes>
 <Route path="/" element={<Landing />}/>
 <Route path="/getstarted" element={<Getstarted />}/>
 <Route path="/components/buttons" element={<Buttons />}/>
 <Route path="/documentation" element={<Documentation />}/>
 <Route path="/components/Slider" element={<Slider />}/>
 </Routes>


    </Router>
  
  
  );
}

export default App;
