
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Misssion from './components/Misssion';
import WrongPath from './components/WrongPath';
import History from './components/History';
import Company from './components/Company';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/mission" element={<Misssion />} />
        <Route path="/history" element={<History />} >
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;
