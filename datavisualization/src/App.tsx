// src/App.tsx

import React, { useState, useEffect } from 'react';
import './index.css'; 
import Intro from './components/Intro';


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  
  useEffect (() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
<div className="relative min-h-screen bg-cream-100 dark:bg-gray-400 flex flex-col items-center">
   
        <Intro />
        <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-10 right-10 px-6 py-2 rounded-md bg-blue-500 dark:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
          
          
      <footer className="fixed bottom-0 inset-x-0 text-gray-700 dark:text-gray-300 text-center">
  <div className="py-2 bg-gray-100 dark:bg-gray-800">
    <p className="text-sm">Designed with 💻 & ⚡</p>
    <p className="text-xs">© 2024 Data Visualizer. All rights reserved.</p>
  </div>
</footer>


   
      
    </div>
  );
};

export default App;
