import Home from "./Home/Home";
import Skills from "./Skills/Skills"
import Contact from "./Contact/Contact"
import Projects from "./Projects/Projects"

import { BrowserRouter , Routes, Route} from "react-router-dom"

function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/skills" element={<Skills/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
