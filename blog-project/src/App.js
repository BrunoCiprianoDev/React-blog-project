import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

//Pages
import About from './pages/About/About.js';
import Home from './pages/Home/Home.js'
import Login from './pages/Login/Login.js'
import Register from './pages/Register/Register';

//Components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
