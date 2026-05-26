export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Example Page</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Any markdown content
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Example Button
      </button>
    </div>
  );
}
