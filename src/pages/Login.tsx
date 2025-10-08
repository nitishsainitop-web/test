export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="border w-full p-2 mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4 rounded"
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Sign In
        </button>
      </div>
    </div>
  );
}
