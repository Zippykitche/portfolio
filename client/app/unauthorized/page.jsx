export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4">401</h1>
        <h2 className="text-2xl font-semibold mb-2">Unauthorized</h2>
        <p className="text-gray-400 mb-6">
          You don't have permission to access this page.
        </p>
        <a
          href="/"
          className="inline-block bg-pink-600 px-4 py-2 rounded hover:bg-pink-700"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
