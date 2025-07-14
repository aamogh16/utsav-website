'use client'
import Navbar from './components/navbar';
import { useState, useEffect } from 'react';


export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to UTSAV.';
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 150);
  }, []);
  return (
      <div>
        <Navbar />
        <div className="pt-18 bg-white">
          <div className="min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-6xl font-bold" style={{color: '#111827'}}>
                    {displayText}
                    <span className="animate-pulse align-text-top">|</span>
                  </h1>
                  <p className="text-lg max-w-md" style={{color: '#6b7280'}}>
                    Join our vibrant community of students celebrating culture, creativity, and connection.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                      src="/images/utsav-transparent.png"
                      alt="Utsav Logo"
                      width={400}
                      height={400}
                      className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}