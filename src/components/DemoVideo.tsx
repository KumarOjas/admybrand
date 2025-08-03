"use client";

import React, { useState } from 'react';

const DemoVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          See ADmyBRAND in Action
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              className="relative w-full aspect-video bg-black rounded-lg shadow-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500"
              aria-label="Play demo video"
            >
              <img
                src="/next.svg"
                alt="Demo video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white opacity-80"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="42" cy="42" r="42" fill="currentColor" opacity="0.6" />
                  <polygon points="33,27 58,42 33,57" fill="white" />
                </svg>
              </div>
            </button>
          ) : (
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="ADmyBRAND Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
