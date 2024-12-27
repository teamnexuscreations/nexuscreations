import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/90 to-gray-900"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] 
        bg-cover bg-center opacity-40"
      ></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30"></div>
    </div>
  );
};

export default HeroBackground;