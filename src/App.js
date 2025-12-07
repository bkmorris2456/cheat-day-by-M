import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Admin from './pages/admin';
import About from './pages/about';
import Contact from './pages/contact';
import Posts from './pages/posts';
import DessertDetails from './pages/dessertDetails';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/dessertDetails" element={<DessertDetails />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
