import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Monthlybudget from './components/Monthlybudget';
import Personaldetails from './components/Personaldetails';
import Submit from './components/Submit';

function App() {
  return (
    <>
    <Home/>
    <Router>
      <Routes>
        <Route path="/" element={<Monthlybudget />} />
        <Route path="/personal-details" element={<Personaldetails />} />
        <Route path="/submit" element={<Submit />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
