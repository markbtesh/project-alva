import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Leadership from './Leadership';
import Resources from './Resources';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
