import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// bootstrap css and js link 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// pages 
import HomePage from './pages/homePage';
import Navbar from './components/navbar';

function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
