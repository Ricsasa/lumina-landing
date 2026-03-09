import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 m-2 bg-blue-600 text-white rounded-md"
      >
        Menu
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 z-40 w-64 h-screen transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900 text-white">
          <h2 className="text-xl font-bold mb-4">Sidebar</h2>
          <ul>
            <li className="p-2 hover:bg-gray-700 rounded">Dashboard</li>
            <li className="p-2 hover:bg-gray-700 rounded">Settings</li>
          </ul>
        </div>
      </aside>
    </>
  );
}
