import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import Leadership from './Leadership';
import Resources from './Resources';
import PasswordGate from './PasswordGate';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user has already entered password (stored in sessionStorage)
    const authStatus = sessionStorage.getItem('alva_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('alva_authenticated', 'true');
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-[#DFFFDF] font-outfit">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PasswordGate onSuccess={handlePasswordSuccess} />;
  }

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
