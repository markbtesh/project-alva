function App() {
  return (
    <div className="min-h-screen bg-black bg-intro relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-cyan-900/10 opacity-0 animate-intro-30"></div>

      <div className="absolute inset-0 opacity-0 animate-intro-30 animate-flicker">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 mx-auto w-screen px-6 text-center pb-[30rem] translate-y-60 rounded-t-full scale-x-150 bg-black bg-intro border-t-2 border-white/10 shadow-[0_0_120px_0_rgba(34,211,238,0.15)] before:content-[''] before:absolute before:-inset-x-8 before:-inset-y-14 before:-z-10 before:rounded-t-[9999px] before:bg-[radial-gradient(80%_80%_at_50%_0%,rgba(34,211,238,0.35),rgba(59,130,246,0.2)_45%,transparent_75%)] before:opacity-0 before:blur-3xl before:transform before:animate-[bgPulse_12s_ease-in-out_infinite] before:animate-introBefore before:animate-flicker">
        <div className="mb-6 transform transition-transform duration-500 mt-28 scale-x-75">
          <div className="relative w-full max-w-md mx-auto">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full blur-3xl opacity-0 animate-intro-70 animate-flicker "></div>
            <img
              src="/alva-white.svg"
              alt="ALVA logo"
              className="w-full logo-glow-intro"
            />
          </div>
        </div>

        <div className="space-y-4 animate-fade-in scale-x-50 font-outfit">
          <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl font-regular tracking-[-0.01em] drop-shadow-[0_0_16px_rgba(59,130,246,0.35)]">Power Inc.</h1>
          <p className="text-lime-300 text-xl  lg:text-2xl xl:text-[28px] font-light tracking-[0.2em] drop-shadow-[0_0_12px_rgba(163,230,53,0.4)] uppercase">UTILITY OF THE AI ERA</p>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-divider-width"></div>
          <p className="text-gray-400 text-sm lg:text-base xl:text-lg tracking-[0.35em] uppercase font-light drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            Next Generation Power Solutions
          </p>
        </div>
        {/* Bottom oversized text effect */}
        <div className="pointer-events-none absolute inset-x-0 bottom-44">
          <div className="relative w-full">
            <span className="block mx-auto text-white/20 font-outfit font-regular leading-none tracking-tight select-none text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] animate-ghost-fade -translate-y-52">
              Defying electric
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </div>
  );
}

export default App;
