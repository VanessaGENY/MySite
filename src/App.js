import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./project/Projects";
import Hobbies from "./hobbies/Hobbies";
import Home from "./home/Home";
import Navbar from "./shared/component/nav/Navbar";
import Music from "./music/Music";
import ScrollTopTop from "./shared/ScrollTopTop";
//import LinkedinService from "./services/Linkedin.service";

function App() {
  //LinkedinService();
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollTopTop />
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="music" element={<Music />} />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
