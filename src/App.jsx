import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#ffffff] border-b border-[#11111128] shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Andya</h1>
          <div className="flex space-x-4">
            <Link 
              to="/profile" 
              className="text-gray-900 font-semibold hover:text-blue-500 transition"
            >
              Profile
            </Link>
            <Link 
              to="/form" 
              className="text-gray-900 font-semibold hover:text-blue-500 transition"
            >
              Form
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
