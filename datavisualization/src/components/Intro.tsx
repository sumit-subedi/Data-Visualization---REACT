import React, {useEffect, useState} from "react";

const Intro: React.FC = () => {
    const [hasFadedIn, setHasFadedIn] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setHasFadedIn(true);
      }, 2000); 
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div
        className={`text-5xl font-bold text-white ${
          hasFadedIn ? 'animate-moveToTop' : 'animate-fadeIn'
        }`}
        style={{ position: 'fixed', top: '50%', left: '40%', transform: 'translate(-50%, -50%)' }}
      >
        Visualize Your Data
      </div>
    );
    
};

export default Intro;