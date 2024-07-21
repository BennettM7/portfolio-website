import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import AboutMe from './pages/about-me';
import Navbar from './components/navbar';
import './App.css';
import Courses from './pages/courses';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about-me" element={<AboutMe />} />
                <Route exact path="/courses" element={<Courses />} />
            </Routes>
        </Router>
    )
}

export default App;
