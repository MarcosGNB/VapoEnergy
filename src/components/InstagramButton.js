import React from 'react';

const InstagramButton = () => {
  return (
    <div className="fixed bottom-6 right-24 z-50">
      <a
        href="https://www.instagram.com/vapoenergy" // <-- Cambia por tu cuenta
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-lg hover:opacity-90 transition-opacity"
      >
        <svg
          className="h-8 w-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
        </svg>
      </a>
    </div>
  );
};

export default InstagramButton;
