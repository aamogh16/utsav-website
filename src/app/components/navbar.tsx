'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image';

export default function Navbar() {
  const[isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className="fixed top-0 z-50 transition-all duration-300 p-4"
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
        boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        width: '100%',
        color : isScrolled ? '#1f2937' : 'white'
      }}>
        <div className="flex justify-between items-center pl-20">
          <div className="flex">
            <Image
              src="/images/utsav-transparent.png"
              alt="UTSAV Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <h2 className="text-xl font-bold pt-2" style={{color: '#111827'}}>UTSAV</h2>
          </div>
          <ul className="flex space-x-20 pr-20 text-xl" style={{color: '#111827'}}>
            <li><a href="/" className="hover:text-blue-200">Home</a></li>
            <li><a href="/about" className="hover:text-blue-200">About Us</a></li>
            <li><a href="/gallery" className="hover:text-blue-200">Gallery</a></li>
            <li><a href="/events" className="hover:text-blue-200">Events</a></li>
          </ul>
        </div>
      </nav>
  );
}