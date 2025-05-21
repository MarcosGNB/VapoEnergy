import React from 'react';

const MapCard = ({ title, mapUrl }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl overflow-hidden shadow-xl transform transition hover:scale-105 hover:shadow-2xl">
      <div className="p-4 text-white font-semibold text-lg text-center border-b border-white/20">
        📍 {title}
      </div>
      <iframe
        src={mapUrl}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title={title}
        className="w-full"
      ></iframe>
    </div>
  );
};

export default MapCard;
