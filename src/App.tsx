import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Leadership from './Leadership';
import Resources from './Resources';
import Login from './Login';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
