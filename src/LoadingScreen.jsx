export default function LoadingScreen() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-white text-black"
      role="status"
      aria-busy="true"
      aria-label="Loading"
    >
      <img
        src="/AKlogo.png"
        alt="Logo"
        className="w-52 h-52 animate-pulse"
      />
      <h1 className="mt-0 text-lg font-medium animate-pulse">Aman Shaw...</h1>
    </div>
  );
}
