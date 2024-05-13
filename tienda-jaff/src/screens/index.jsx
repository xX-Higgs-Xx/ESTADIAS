import React from 'react';
import '../output.css';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

const Index = () => {
  return (
    <div className="bg-[url(./assets/img/INDEX/IMG-V-4-1.jpg)] bg-cover bg-top w-screen h-screen overflow-y-auto relative">
      <Navbar />
      <div className="min-h-screen text-white flex flex-col justify-between">
        <div className="flex-grow"></div>
        <div className="md:flex ml-8">
          <h1 className="md:ml-14 md:mb-16 md:text-5xl  text-4xl ">TEMPORADA 2024</h1>
          <button className="duration-200 z-0 md:mb-16 md:ml-4 md:text-xs border-2 px-8 rounded-full text-sm mb-20 py-3 border-white hover:bg-white hover:text-orange-400 md:font-bold backdrop-blur">VER MÁS</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
