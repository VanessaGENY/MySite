import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './project/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="projects" element={<Projects />} />
      <Route path="*" />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
