
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
