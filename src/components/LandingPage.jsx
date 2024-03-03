import React from 'react';

const LandingPage = () => {
  return (
    <div className="relative h-screen flex items-center justify-center" style={{height:'75vh'}}>
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center filter blur-sm bg-opacity-50"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg)', opacity:'70%'}}
        ></div>
      </div>
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Movie Hub</h1>
        <p className="text-lg">Your go-to Movie App</p>
        <div className="flex flex-col md:flex-row items-center mb-4">
      
      </div>
      </div>
    </div>
  );
};

export default LandingPage;