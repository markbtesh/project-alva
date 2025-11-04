import { useState, FormEvent } from 'react';

interface PasswordGateProps {
  onSuccess: () => void;
}

function PasswordGate({ onSuccess }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Set your password here - change this to your desired password
  const CORRECT_PASSWORD = 'alva2025';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a brief delay for better UX
    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        onSuccess();
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
      setIsLoading(false);
    }, 300);
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
            Protected Site
          </h1>
          <p className="text-gray-400 font-outfit">
            Please enter the password to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm border border-[#DFFFDF]/20 rounded-lg p-8 shadow-xl">
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
              autoFocus
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
            disabled={isLoading || !password}
            className="w-full py-3 bg-[#DFFFDF] text-black font-semibold rounded-lg hover:bg-[#AFFF6E] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-outfit"
          >
            {isLoading ? 'Verifying...' : 'Enter Site'}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6 font-outfit">
          This is a temporary protected site
        </p>
      </div>
    </div>
  );
}

export default PasswordGate;
