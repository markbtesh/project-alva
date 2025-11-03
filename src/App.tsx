import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Leadership from './Leadership';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </Router>
  );
}

export default App;
