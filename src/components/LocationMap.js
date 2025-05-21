import React from 'react';

const LocationMap = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg h-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14405.186100704283!2d-57.1448349692275!3d-25.385251999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da5d74b6f0001%3A0x2a5b6f1a2a4e3e1f!2sCaacup%C3%A9%2C%20Paraguay!5e0!3m2!1ses!2spy!4v1620000000000!5m2!1ses!2spy"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Ubicación Vapo energy"
        className="min-h-96"
      ></iframe>
    </div>
  );
};

export default LocationMap;