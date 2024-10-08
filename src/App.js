import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import AboutMe from './pages/about-me';
import Navbar from './components/navbar';
import './App.css';
import Courses from './pages/courses';
import Projects from './pages/projects';
import CSXLProject from './pages/csxl-project';
import MockTwitter from './pages/mock-twitter';


function App() {
    return (
        <Router basename="/portfolio-website">
            <Navbar />
            <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about-me" element={<AboutMe />} />
                    <Route exact path="/courses" element={<Courses />} />
                    <Route exact path="/projects" element={<Projects /> } />
                    <Route exact path="/projects/csxl-organization-management" element={<CSXLProject />} />
                    <Route exact path="/projects/mock-twitter" element={<MockTwitter />} />
            </Routes>
        </Router>
    )
}

export default App;
