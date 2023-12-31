import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './project/Projects';
import Hobbies from './hobbies/Hobbies';
import Home from './home/Home';
import Navbar from './shared/component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
