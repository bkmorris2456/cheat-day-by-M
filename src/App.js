import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Admin from './pages/admin';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
