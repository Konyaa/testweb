import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center px-6 pt-20 pb-28 z-10 relative">
      <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-snug">
        Satu Visi, Wujud Aksi,<br />
        Bangga Raih Prestasi
      </h1>
      <p className="text-sm md:text-base max-w-xl mb-8 text-gray-300 mx-auto">
        Discover the captivating world of robotics where innovation, cross-division collaboration,
        and limitless exploration come to life.
      </p>

     
      <div className="absolute left-0 bottom-0 mb-8 ml-8">
        <a
          href="#"
          className="bg-white text-black px-6 py-2 rounded-full flex items-start gap-2 font-semibold hover:bg-gray-200"
        >
          Partner With Us <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>

     
      <div className="absolute right-0 bottom-0 mb-8 mr-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white flex items-center gap-1">
          Explore More
        </a>
      </div>
      <div className="absolute w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-32 h-32 bg-blue-400 opacity-20 blur-2xl rounded-full top-1/3 right-10"></div>
      <div className="absolute w-24 h-24 bg-blue-300 opacity-10 blur-2xl rounded-full bottom-1/4 left-1/4"></div>
      <div className="absolute w-28 h-28 bg-blue-400 opacity-10 blur-2xl rounded-full bottom-10 right-1/3"></div>
      
    </section>
  );
}