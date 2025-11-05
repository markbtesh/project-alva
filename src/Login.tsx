import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Always show invalid user error
    setTimeout(() => {
      setError('Invalid username or password. Please try again.');
      setUsername('');
      setPassword('');
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <img
            src="/alva-white.svg"
            alt="ALVA logo"
            className="h-12 w-auto mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold text-[#DFFFDF] font-outfit mb-2">
            Login
          </h1>
          <p className="text-gray-400 font-outfit">
            Enter your credentials to access
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm border border-[#DFFFDF]/20 rounded-lg p-8 shadow-xl" noValidate>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-[#DFFFDF] mb-2 font-outfit"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-[#DFFFDF]/30 rounded-lg text-[#DFFFDF] font-outfit focus:outline-none focus:ring-2 focus:ring-[#DFFFDF]/50 focus:border-[#DFFFDF]/50 transition-all"
              placeholder="Enter username"
              autoFocus
              autoComplete="username"
              disabled={isLoading}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#DFFFDF] mb-2 font-outfit"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border border-[#DFFFDF]/30 rounded-lg text-[#DFFFDF] font-outfit focus:outline-none focus:ring-2 focus:ring-[#DFFFDF]/50 focus:border-[#DFFFDF]/50 transition-all"
              placeholder="Enter password"
              autoComplete="current-password"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm font-outfit">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !username || !password}
            className="w-full py-3 bg-[#DFFFDF] text-black font-semibold rounded-lg hover:bg-[#AFFF6E] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-outfit"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-gray-400 hover:text-[#DFFFDF] text-sm font-outfit transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

